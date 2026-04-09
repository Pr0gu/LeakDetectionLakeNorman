export const SITE = {
  name: 'Leak Detection Lake Norman',
  domain: 'leakdetectionlakenorman.com',
  url: 'https://leakdetectionlakenorman.com',
  phone: '980-405-4186',
  phoneHref: 'tel:+19804054186',
  email: 'hello@leakdetectionlakenorman.com',
  hours: {
    weekday: 'Mon-Fri 7AM-8PM',
    saturday: 'Sat 8AM-6PM',
    sunday: 'Sun Emergency 24/7',
  },
} as const;

export const SERVICES = [
  {
    title: 'Slab Leak Detection',
    description:
      'Non-invasive acoustic and thermal detection that pinpoints leaks beneath foundations — protecting your lakefront property from hidden damage.',
  },
  {
    title: 'Water Line Leak Detection',
    description:
      'Underground pipe locating and pressure testing for residential and waterfront properties. We find leaks before they compromise your landscape.',
  },
  {
    title: 'Pool & Spa Leak Detection',
    description:
      'Precision dye testing and structural analysis for pools and spas — essential for Lake Norman homes where outdoor living is everything.',
  },
  {
    title: 'Sewer Camera Inspection',
    description:
      'HD camera pipe inspection to diagnose blockages, root intrusion, and pipe deterioration without excavation.',
  },
  {
    title: 'Emergency Leak Repair',
    description:
      '24/7 emergency response for burst pipes and active leaks. We stop water damage fast and make permanent repairs.',
  },
  {
    title: 'Full Plumbing Services',
    description:
      'Complete plumbing solutions — water heater installation, drain cleaning, repiping, and fixture repair for Lake Norman homes.',
  },
] as const;

export const SERVICE_AREAS = [
  { name: 'Cornelius', primary: true },
  { name: 'Davidson', primary: true },
  { name: 'Huntersville', primary: true },
  { name: 'Mooresville', primary: true },
  { name: 'Denver', primary: false },
  { name: 'The Peninsula', primary: false },
  { name: 'River Run', primary: false },
  { name: 'The Point', primary: false },
  { name: 'Flagship', primary: false },
  { name: 'Connor Quay', primary: false },
  { name: 'Sherrills Ford', primary: false },
  { name: 'Troutman', primary: false },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    location: 'Myers Park',
    rating: 5,
    text: 'They found a slab leak that two other plumbers missed. Saved us thousands in potential water damage. Professional, fast, and honest pricing.',
  },
  {
    name: 'Robert Chen',
    location: 'Dilworth',
    rating: 5,
    text: 'Our 1920s home had recurring drain issues. They used a camera to find tree roots and hydro jetted the line. Problem solved permanently!',
  },
  {
    name: 'Mark Stevens',
    location: 'Eastover',
    rating: 5,
    text: 'Pool leak detection experts! Found and fixed a leak that was wasting hundreds of gallons daily. Saved our summer!',
  },
] as const;

export const TECHNOLOGIES = [
  {
    title: 'Acoustic Listening',
    description:
      'Sensitive ground microphones detect the sound of escaping water through concrete, soil, and stone — even on lakefront properties with complex foundations.',
  },
  {
    title: 'Thermal Imaging',
    description:
      'Infrared cameras reveal temperature anomalies caused by leaking water, making invisible leaks visible without any demolition or disruption.',
  },
  {
    title: 'Video Pipe Inspection',
    description:
      'HD waterproof cameras provide real-time visual confirmation of pipe condition, cracks, root intrusion, and blockages from the inside.',
  },
  {
    title: 'Hydrostatic Pressure Testing',
    description:
      'Isolated pressure tests on pipe segments confirm exact leak locations with scientific precision — the gold standard in detection accuracy.',
  },
] as const;
