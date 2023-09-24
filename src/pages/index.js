import MainLayout from '@/layouts/MainLayout'

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
    </>
  )
}

export default HomePage

HomePage.getLayout = page => <MainLayout>{page}</MainLayout>
