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
    },
    toast: {
      slots: {
        description: 'text-xs text-muted'
      }
    },
    accordion: {
      slots: {
        item: 'border-b-2 border-neutral-700 dark:border-neutral-200',
        header: 'px-4 py-2',
        body: 'p-4 bg-neutral-100 dark:bg-neutral-950 ',
        label: 'font-bold text-sm'
      }
    }
  }
})
