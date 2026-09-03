export const useAppToast = () => {
  const toast = useToast()

  const success = (title?: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: 'i-lucide-circle-check',
      color: 'success'
    })
  }

  const warning = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: 'i-lucide-triangle-alert',
      color: 'warning'
    })
  }

  const error = (title: string, description?: string) => {
    toast.add({
      title,
      description,
      icon: 'i-lucide-circle-x',
      color: 'error'
    })
  }

  return {
    success,
    warning,
    error
  }
}
