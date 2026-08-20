export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'amber',
      neutral: 'slate'
    },
    header: {
      slots: {
        root: 'bg-default border-b-2 border-neutral-700 dark:border-neutral-200'
      }
    },
    separator: {
      variants: {
        color: {
          neutral: {
            border: 'border-neutral-700 dark:border-neutral-200'
          }
        }
      }
    },
    formField: {
      slots: {
        error: 'text-xs'
      }
    }
  }
})
