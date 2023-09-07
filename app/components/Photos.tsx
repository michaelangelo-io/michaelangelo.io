/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import seattle from 'public/images/main-page/seattle.jpg'
import setup from 'public/images/main-page/setup.jpg'
import { HoverPop } from './Animations'
import { Carousel } from './Carousel'

export function Photos() {
  return (
    <div className="flex-1 columns-2 sm:columns-3 gap-2 my-8">
      <HoverPop>
        <div className="relative h-40 mb-4 rotate-1 my-1">
          <Carousel
            images={[
              <img
                key={'hawaii'}
                alt="somehwere in hawaii"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/hawaii.jpg'}
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />,
              <Image
                key={'setup'}
                alt="my computer setup"
                src={setup}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />,
            ]}
          />
        </div>
      </HoverPop>
      <HoverPop>
        <div className="relative h-40 md:h-80 mb-4 sm:mb-0 -rotate-1  ">
          <Carousel
            images={[
              <img
                placeholder="blur"
                key={'hawaiii2'}
                alt="somehwere in hawaii"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/hawaiii2.jpg'}
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover object-[-16px] sm:object-center"
              />,
              <Image
                placeholder="blur"
                key={'seattle'}
                alt="some brewery in seattle"
                src={seattle}
                fill
                sizes="(max-width: 768px) 213px, 33vw"
                priority
                className="rounded-lg object-cover"
              />,
            ]}
          />
        </div>
      </HoverPop>
      <HoverPop>
        <div className="relative h-80 lg:h-80 sm:mb-4 -rotate-1 my-1">
          <Carousel
            images={[
              <img
                key={'colorado'}
                alt="Me in some colorado mountains during the summer"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/colorado.jpg'}
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover object-top sm:object-center"
              />,
              <Image
                key={'closeup'}
                alt="somewhere in utah skiing"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/closeup.jpg'}
                width={213}
                height={340}
                className="rounded-lg object-cover"
              />,
            ]}
          />
        </div>
      </HoverPop>
      <HoverPop>
        <div className="relative h-40 mb-4 sm:mb-0 my-2">
          <Carousel
            images={[
              <img
                placeholder="blur"
                key={'brighton'}
                alt="friend and I at Brighton, UT"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/brighton.jpg'}
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg   object-scale-down mt-1"
              />,
              <img
                className="w-full h-[200px] rounded-full  object-scale-down "
                placeholder="blur"
                key={'girlfriend'}
                alt="my girlfriend and I "
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/girlfriend.jpg'}
                sizes="(max-width: 768px) 213px, 33vw"
                height={50}
              />,
            ]}
          />
        </div>
      </HoverPop>
      <HoverPop>
        <div className="relative h-40 mb-4 rotate-1 my-2">
          <Carousel
            images={[
              <img
                placeholder="blur"
                key={'malibu'}
                alt="cycling in Malibu, CA"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/malibu.jpg'}
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />,
              <img
                placeholder="blur"
                key={'doggos'}
                alt="my dogs!"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/doggos.jpg'}
                sizes="(max-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />,
            ]}
          />
        </div>
      </HoverPop>
      <HoverPop>
        <div className="relative h-80 -rotate-1 my-1">
          <Carousel
            images={[
              <img
                placeholder="blur"
                key={'honolulu'}
                alt="friends and I completing the honolulu marathon"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/honolulu.jpg'}
                sizes="(min-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />,
              <img
                placeholder="blur"
                key={'leadville'}
                alt="me at the leadville marathon"
                src={'https://media.michaelangrivera.com/michaelangeloio/main-page/leadville.jpg'}
                sizes="(min-width: 768px) 213px, 33vw"
                className="rounded-lg object-cover"
              />,
            ]}
          />
        </div>
      </HoverPop>
    </div>
  )
}
