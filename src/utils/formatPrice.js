export const formatPrice = (n) => {
  if (n == null) return '-'
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`
  return '₹' + new Intl.NumberFormat('en-IN').format(n)
}
