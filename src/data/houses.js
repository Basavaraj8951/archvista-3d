const T = [
['Modern Courtyard Villa','Modern','Villa','Bangalore',4,4,2,3200,3400,42000000,['Courtyard','Home theatre','Solar']],
['Luxury Garden Villa','Luxury','Villa','Hyderabad',5,5,2,4800,4900,68000000,['Pool','Garden','Elevator']],
['Contemporary Duplex','Contemporary','Duplex','Pune',3,3,2,1800,2300,18500000,['Terrace','Study']],
['Traditional Indian Villa','Traditional','Villa','Jaipur',4,4,2,3600,3800,36000000,['Pooja room','Courtyard']],
['Modern Glass Villa','Modern','Villa','Mumbai',4,5,3,3000,4200,95000000,['Glass facade','Pool','Smart home']],
['Minimal Concrete House','Minimal','House','Ahmedabad',3,3,2,2200,2400,21000000,['Exposed concrete','Skylight']],
['Modern Farmhouse','Farmhouse','Farmhouse','Coimbatore',4,4,1,8000,3500,32000000,['Orchard','Verandah']],
['Luxury G+2 Villa','Luxury','Villa','Delhi',6,6,3,3500,6200,88000000,['Elevator','Terrace','Gym']],
['Compact Urban Home','Contemporary','House','Chennai',2,2,2,1200,1500,9500000,['Compact plan','Terrace']],
['Premium 3BHK Residence','Contemporary','Residence','Pune',3,3,1,2000,2000,15500000,['Modular kitchen','Balcony']],
['Modern Tropical Villa','Tropical','Villa','Goa',4,4,2,4000,3600,45000000,['Pool','Open living','Deck']],
['Contemporary Bangalore Villa','Contemporary','Villa','Bangalore',4,4,2,2400,3000,29000000,['Solar','Terrace garden']],
['Modern Kerala Villa','Kerala','Villa','Kochi',4,4,2,3500,3200,31000000,['Sloped roof','Verandah']],
['Traditional Courtyard House','Traditional','House','Madurai',3,3,1,3000,2600,19000000,['Central courtyard','Teak doors']],
['Luxury Family Residence','Luxury','Residence','Gurugram',5,5,3,5000,5600,72000000,['Pool','Home theatre']],
['Modern Sloped Roof House','Modern','House','Mangalore',3,3,2,2600,2500,22000000,['Sloped roof','Skylight']],
['Elegant White Villa','Luxury','Villa','Chandigarh',4,4,2,3400,3700,41000000,['Colonnade','Garden']],
['Premium Duplex','Contemporary','Duplex','Hyderabad',4,4,2,2000,2900,26000000,['Double height','Terrace']],
['Budget Modern Home','Modern','House','Nagpur',2,2,1,1500,1100,6500000,['Efficient plan','Low maintenance']],
['Luxury Garden Residence','Luxury','Residence','Kolkata',5,5,2,6000,5000,64000000,['Landscaped garden','Pool'] ]]
export const HOUSES = T.map(([name, style, category, location, bedrooms, bathrooms, floors, plotSize, builtUpArea, budget, features], i) => ({
  id: 'house-' + (i + 1), name, style, category, location, bedrooms, bathrooms, floors, plotSize, builtUpArea, budget, features,
  description: `${name}: a ${style.toLowerCase()} ${category.toLowerCase()} in ${location} with ${bedrooms} bedrooms across ${floors} floor${floors > 1 ? 's' : ''}.`,
  exteriorModel: ['modern-villa', 'luxury-villa', 'duplex', 'farmhouse'][i % 4] ? `/models/houses/${['modern-villa', 'luxury-villa', 'duplex', 'farmhouse'][i % 4]}.glb` : null,
  floorPlans: ['Ground Floor', 'First Floor', 'Second Floor'].slice(0, floors),
  rooms: ['living', 'dining', 'kitchen', 'master', 'bedroom2', 'bathroom', 'balcony', 'garden'],
  interiorPackages: ['modern-luxury', 'warm-contemporary', 'minimal-scandinavian', 'indian-contemporary', 'premium-classic'],
  image: `/images/houses/house-${i + 1}.jpg`, popularity: 100 - i * 3, year: 2022 + (i % 5)
}))
export const getHouse = (id) => HOUSES.find((h) => h.id === id)
