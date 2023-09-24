import HeroSection from '@/components/Hero'
import MainLayout from '@/layouts/MainLayout'

const HomePage = () => {
  return (
    <>
      <HeroSection />
    </>
  )
}

export default HomePage

HomePage.getLayout = page => <MainLayout>{page}</MainLayout>
