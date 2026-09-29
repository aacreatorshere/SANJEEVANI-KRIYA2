import { CourseItem } from '../types';

export const coursesData: CourseItem[] = [
  {
    id: 'asthi-sanchalan',
    number: '01',
    displayNumber: '01 / 03',
    name: 'ASTHI SANCHALAN SANJEEVANI',
    subtitle: 'Physical Foundation & Skeletal Geometry',
    headline: 'BEGIN WITH THE BODY.',
    description: 'A structured practice focused on body posture and skeletal alignment, presented as a foundational part of the Sanjeevani approach.',
    focusPoints: [
      'POSTURE',
      'STRUCTURE',
      'ALIGNMENT',
      'BODY AWARENESS'
    ],
    ctaText: 'JOIN THIS COURSE',
    image: '/1.png',
    imageAlt: 'Physical foundation and skeletal alignment practice',
    accentQuote: 'The skeletal system is the foundational architecture through which life energies calibrate.'
  },
  {
    id: 'the-antidote',
    number: '02',
    displayNumber: '02 / 03',
    name: 'SANJEEVANI — THE ANTIDOTE',
    subtitle: 'Comprehensive Experiential Immersion',
    headline: 'UNDERSTAND THE SYSTEM. EXPERIENCE THE SHIFT.',
    description: 'An experiential program combining yogic practices, understanding, guided processes and awareness-oriented tools to explore body, mind, emotions and life energies.',
    focusPoints: [
      'HUMAN SYSTEM',
      'YOGIC PRACTICE',
      'AWARENESS',
      'EXPERIENCE'
    ],
    programInfo: {
      duration: 'APPROX. 18 HOURS',
      format: '3 NIGHTS · 4 DAYS',
      type: 'OFFLINE EXPERIENCE'
    },
    ctaText: 'JOIN THIS COURSE',
    image: '/2.png',
    imageAlt: 'Comprehensive experiential immersion group in quiet practice',
    accentQuote: 'Not more information. A direct shift in how the internal mechanism is experienced.'
  },
  {
    id: 'surya-sanjeevani',
    number: '03',
    displayNumber: '03 / 03',
    name: 'SURYA SANJEEVANI',
    subtitle: 'Solar Calibration & Vital Energy',
    headline: 'RISING THE SUN WITHIN.',
    description: 'A practice centred on the idea of awakening the Sun within and exploring its relationship with life and inner experience.',
    focusPoints: [
      'SUN',
      'VITALITY',
      'INNER AWARENESS',
      'LIFE'
    ],
    ctaText: 'JOIN THIS COURSE',
    image: '/3.png',
    imageAlt: 'Solar calibration and vital energy practice group at sunrise',
    accentQuote: 'Harmonising the internal rhythms with the primal source of planetary vitality.'
  }
];
