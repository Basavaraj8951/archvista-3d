import FurnitureViewer from '../furniture/FurnitureViewer'
export default function ProductViewer({ product, className }) { return <FurnitureViewer product={product} className={className || 'h-[380px] w-full'} /> }
