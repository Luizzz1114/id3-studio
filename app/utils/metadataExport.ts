import { ID3Writer } from 'browser-id3-writer'

export const injectId3Tags = async (file: File, m: TrackMetadataPayload): Promise<{ blob: Blob; coverOmitted: boolean }> => {
  const arrayBuffer = await file.arrayBuffer()
  const writer = new ID3Writer(arrayBuffer)
  let coverOmitted = false

  writer.setFrame('TIT2', String(m.TITLE))
  writer.setFrame('TPE1', [m.ARTIST || ''])
  writer.setFrame('TALB', String(m.ALBUM))
  writer.setFrame('TPE2', String(m.ALBUMARTIST))
  writer.setFrame('TCOM', [m.COMPOSER || ''])
  writer.setFrame('TCON', [m.GENRE || ''])
  writer.setFrame('TPUB', String(m.LABEL))
  writer.setFrame('TCOP', String(m.COPYRIGHT))
  writer.setFrame('TSRC', String(m.ISRC))
  writer.setFrame('TRCK', String(m.TRACK))
  writer.setFrame('TPOS', String(m.DISCNUMBER))

  if (m.BPM) {
    const bpmNumber = Number.parseInt(String(m.BPM), 10)
    if (!Number.isNaN(bpmNumber)) writer.setFrame('TBPM', bpmNumber)
  }

  if (m.LENGTH) {
    const lengthMs = Number.parseInt(String(m.LENGTH), 10)
    if (!Number.isNaN(lengthMs)) writer.setFrame('TLEN', lengthMs)
  }

  if (m.YEAR) {
    const [yearStr, monthStr, dayStr] = String(m.YEAR).split('-')
    const year = Number.parseInt(String(yearStr), 10)
    if (!Number.isNaN(year)) writer.setFrame('TYER', year)
    if (dayStr && monthStr) writer.setFrame('TDAT', `${dayStr}${monthStr}`)
  }

  const lyricsContent = m.UNSYNCEDLYRICS
  if (lyricsContent && lyricsContent !== 'Letra no disponible') {
    writer.setFrame('USLT', {
      description: '',
      lyrics: String(lyricsContent),
      language: 'xxx'
    })
  }

  if (m.ALBUMART) {
    try {
      const coverRes = await fetch(`/api/cover?url=${encodeURIComponent(m.ALBUMART)}`)
      if (coverRes.ok) {
        const coverBuffer = await coverRes.arrayBuffer()
        writer.setFrame('APIC', {
          type: 3,
          data: coverBuffer,
          description: ''
        })
      } else {
        coverOmitted = true
      }
    } catch {
      coverOmitted = true
    }
  }

  writer.addTag()
  return { 
    blob: writer.getBlob(), 
    coverOmitted 
  }
}

export const createTxtBlob = (metadata: TrackMetadataPayload): Blob => {
  const metaRows = Object.entries(metadata)
    .filter(([_, value]) => value != null && value !== '')
    .map(([key, value]) => `${key}: ${value}`)
  const content = metaRows.join('\n\n')
  return new Blob([content], { type: 'text/plain;charset=utf-8' })
}
