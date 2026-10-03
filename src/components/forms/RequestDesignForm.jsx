import ContactForm from './ContactForm'
export default function RequestDesignForm({ house }) { return <ContactForm title="Request this design" subject={house ? `Design request: ${house.name}` : 'Design request'} /> }
