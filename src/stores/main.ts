import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Package {
  id: number
  name: string
  type: 'umroh' | 'haji'
  price: string
  duration: string
  features: string[]
  image: string
  popular?: boolean
}

export interface Testimonial {
  id: number
  name: string
  location: string
  text: string
  rating: number
}

export const useMainStore = defineStore('main', () => {
  const packages = ref<Package[]>([
    {
      id: 1,
      name: 'Paket Umroh Reguler',
      type: 'umroh',
      price: 'Rp 25.000.000',
      duration: '12 Hari',
      features: [
        'Tiket pesawat PP',
        'Hotel bintang 4',
        'Makan 3x sehari',
        'Visa umroh',
        'Manasik umroh',
        'Tour guide berpengalaman'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'Paket Umroh VIP',
      type: 'umroh',
      price: 'Rp 35.000.000',
      duration: '14 Hari',
      features: [
        'Tiket pesawat business class',
        'Hotel bintang 5 dekat Haram',
        'Makan premium',
        'Visa umroh',
        'City tour Madinah',
        'Ziarah lengkap',
        'Tour guide eksklusif'
      ],
      image: '/api/placeholder/400/300',
      popular: true
    },
    {
      id: 3,
      name: 'Paket Haji Reguler',
      type: 'haji',
      price: 'Rp 65.000.000',
      duration: '40 Hari',
      features: [
        'Tiket pesawat PP',
        'Akomodasi sesuai kloter',
        'Makan 3x sehari',
        'Visa haji',
        'Manasik haji lengkap',
        'Perlengkapan haji',
        'Bimbingan ibadah'
      ],
      image: '/api/placeholder/400/300'
    }
  ])

  const testimonials = ref<Testimonial[]>([
    {
      id: 1,
      name: 'Ahmad Hidayat',
      location: 'Jakarta',
      text: 'Pelayanan sangat memuaskan, tour guide berpengalaman dan hotel dekat dengan Masjidil Haram. Sangat direkomendasikan!',
      rating: 5
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      location: 'Bandung',
      text: 'Alhamdulillah perjalanan umroh bersama Barokah Travel sangat lancar. Semua kebutuhan tersedia dengan baik.',
      rating: 5
    },
    {
      id: 3,
      name: 'Muhammad Yusuf',
      location: 'Surabaya',
      text: 'Staff yang ramah dan profesional. Paket haji yang lengkap dengan bimbingan yang sangat membantu.',
      rating: 5
    }
  ])

  const contactForm = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
    packageType: ''
  })

  const isLoading = ref(false)

  const submitContact = async () => {
    isLoading.value = true
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    isLoading.value = false
    
    // Reset form
    contactForm.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
      packageType: ''
    }
    
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.')
  }

  return {
    packages,
    testimonials,
    contactForm,
    isLoading,
    submitContact
  }
})