export const medicines = [
  { id: 1, name: 'آسپیرین 100', dosage: '100mg', type: 'قرص', category: 'مسکن', count: 50 },
  { id: 2, name: 'آموکسی‌سیلین 500', dosage: '500mg', type: 'کپسول', category: 'آنتی‌بیوتیک', count: 24 },
  { id: 3, name: 'متفورمین 500', dosage: '500mg', type: 'قرص', category: 'دیابت', count: 100 },
  { id: 4, name: 'سرماخوردگی بزرگسالان', dosage: 'N/A', type: 'قرص', category: 'سرماخوردگی', count: 120 },
  { id: 5, name: 'دگزامتازون', dosage: '8mg', type: 'آمپول', category: 'ضد التهاب', count: 15 },
];

export const pharmacies = [
  {
    id: 1,
    name: 'داروخانه شبانه‌روزی مرکزی',
    address: 'خیابان ولیعصر، نرسیده به میدان ونک',
    phone: '021-88888888',
    status: 'باز',
    location: { lat: 35.75, lng: 51.41 }
  },
  {
    id: 2,
    name: 'داروخانه دکتر سمیعی',
    address: 'خیابان شریعتی، بالاتر از ظفر',
    phone: '021-22222222',
    status: 'بسته',
    location: { lat: 35.77, lng: 51.44 }
  },
  {
    id: 3,
    name: 'داروخانه سپید',
    address: 'میدان هفت تیر، ابتدای کریمخان',
    phone: '021-88112233',
    status: 'باز',
    location: { lat: 35.71, lng: 51.42 }
  },
];

export const emergencyRequests = [
  {
    id: 'REQ-101',
    user: 'حمید محمدی',
    medicine: 'انسولین قلمی',
    priority: 'بحرانی',
    status: 'در حال جستجو',
    time: '۱۰ دقیقه پیش',
    address: 'تهران، پیروزی، کوچه نهم'
  },
  {
    id: 'REQ-102',
    user: 'مریم سادات',
    medicine: 'اکسیژن ۵ لیتری',
    priority: 'فوری',
    status: 'امدادگر اعزام شد',
    time: '۲۵ دقیقه پیش',
    address: 'تهران، سعادت آباد، سرو غربی'
  },
];

export const requestHistory = [
  { id: 1, item: 'آسپیرین', date: '۱۴۰۲/۰۸/۱۲', status: 'تحویل شده', pharmacy: 'داروخانه مرکزی' },
  { id: 2, item: 'انسولین نوورپید', date: '۱۴۰۲/۰۷/۳۰', status: 'لغو شده', pharmacy: 'داروخانه سپید' },
  { id: 3, item: 'شربت دیفن هیدرامین', date: '۱۴۰۲/۰۷/۱۵', status: 'تحویل شده', pharmacy: 'داروخانه دکتر سمیعی' },
];

export const missionHistory = [
  { id: 1, type: 'تحویل دارو', date: '۱۴۰۲/۰۸/۱۰', patient: 'حمید محمدی', result: 'موفق' },
  { id: 2, type: 'کپسول اکسیژن', date: '۱۴۰۲/۰۸/۰۵', patient: 'زهرا علوی', result: 'موفق' },
];

export const pharmacyOrders = [
  { id: 1, customer: 'محمد کریمی', items: 'آسپیرین (۲ عدد)', time: '۱۴:۳۰', status: 'آماده تحویل' },
  { id: 2, customer: 'سارا احمدی', items: 'ژلوفن', time: '۱۵:۱۰', status: 'در حال بررسی' },
];

export const userProfile = {
  name: 'احمد رضایی',
  code: '۸۸۲۴۱۵',
  role: 'rescuer', // or 'citizen', 'pharmacy'
  avatar: null,
};
