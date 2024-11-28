import { Icons } from '@/components/icons'

export default function contact() {
  return (
    <div className='container flex max-w-screen-md grow flex-col items-center justify-center'>
      <h3 className='mb-8 text-2xl font-bold'>Contact Me</h3>

      <div className='flex flex-wrap justify-center gap-8'>
        <a target='_blank' rel='nofollow' href='mailto:adi.arief77@gmail.com'>
          <Icons.mail className='mb-2' />
        </a>

        <a
          target='_blank'
          rel='nofollow'
          href='https://twitter.com/hariadiarief'
        >
          <Icons.twitter className='mb-2' />
        </a>

        <a
          target='_blank'
          rel='nofollow'
          href='https://instagram.com/hariadiarief_'
        >
          <Icons.instagram className='mb-2' />
        </a>

        <a
          target='_blank'
          rel='nofollow'
          href='https://github.com/hariadiarief'
        >
          <Icons.gitHub className='mb-2' />
        </a>

        <a
          target='_blank'
          rel='nofollow'
          href='https://www.linkedin.com/in/hariadiarief/'
        >
          <Icons.linkedin className='mb-2' />
        </a>
      </div>
    </div>
  )
}
