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
    name: 'Michael T.',
    location: 'The Peninsula',
    rating: 5,
    text: 'Pool was losing about an inch a day for three months. Pool company said \u201Cit\u2019s evaporation.\u201D These guys did a dye test, found a crack in the return line behind the waterfall. Repaired it through one small access point \u2014 didn\u2019t touch the deck, didn\u2019t touch the stone. Pool holds water perfectly now.',
  },
  {
    name: 'Patricia & Robert W.',
    location: 'Davidson',
    rating: 5,
    text: '6 AM on a Sunday, water coming up through the crawlspace vents. I expected \u201Cwe\u2019ll be there Monday.\u201D The guy who answered said \u201C20 minutes.\u201D He meant it. They used a thermal camera to find a split joint under the master bedroom, isolated and repaired it by noon. Our hardwood floors survived. I still can\u2019t believe the response time.',
  },
  {
    name: 'Steven L.',
    location: 'Cornelius',
    rating: 5,
    text: 'Three separate plumbers quoted us $4\u2013$8K and said they\u2019d need to jackhammer a 10-foot section of the slab. These guys came in, scanned for 30 minutes, and found the leak 2 feet from where everyone else was looking. One small cut, one repair. $900. Floors are fine. I tell everyone about them.',
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
