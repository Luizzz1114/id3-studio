export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      secondary: 'amber',
      neutral: 'slate'
    },
    accordion: {
      slots: {
        item: 'border-b-2 border-neutral-700 dark:border-neutral-200',
        header: 'px-4 sm:px-6 py-2',
        body: 'p-4 sm:p-6 bg-neutral-100 dark:bg-neutral-950 ',
        label: 'font-bold text-sm'
      }
    },
    formField: {
      slots: {
        error: 'text-xs'
      }
    },
    header: {
      slots: {
        root: 'bg-default border-b-2 border-neutral-700 dark:border-neutral-200',
        content: 'fixed bottom-4 left-4 right-4 h-auto z-50 bg-white dark:bg-gray-900 border-2 border-neutral-900 dark:border-white shadow-3d rounded-none flex flex-col overflow-hidden lg:hidden'
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
    toast: {
      slots: {
        description: 'text-xs text-muted'
      }
    }
  }
})
