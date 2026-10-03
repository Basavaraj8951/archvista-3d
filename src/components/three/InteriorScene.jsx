import { useExperience } from '../../context/ExperienceContext'
import LivingRoom from '../rooms/LivingRoom'
import DiningRoom from '../rooms/DiningRoom'
import Kitchen from '../rooms/Kitchen'
import MasterBedroom from '../rooms/MasterBedroom'
import Bedroom from '../rooms/Bedroom'
import Bathroom from '../rooms/Bathroom'
import Balcony from '../rooms/Balcony'
import Garden from '../rooms/Garden'
const MAP = { living: LivingRoom, dining: DiningRoom, kitchen: Kitchen, master: MasterBedroom, bedroom2: Bedroom, bedroom3: Bedroom, bathroom: Bathroom, balcony: Balcony, garden: Garden }
export default function InteriorScene() { const { state } = useExperience(); const Room = MAP[state.room] || LivingRoom; return <Room key={state.room} /> }
