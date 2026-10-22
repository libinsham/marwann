
import './OurStorySection.css'

export default function OurStorySection() {
  return (
    <section
      className="our-story-section p-t-100 p-b-100 p-t-xs-80 p-b-xs-80"
      style={{
        backgroundImage:
          'url(/assets/img/bg/why-us-bg.webp), url(/assets/img/bg/who-we-are-bg.webp)',
      }}
    >
      <div className="container">
        <div className="row align-items-center row-gap-4">

          {/* LEFT: STORY IMAGE BLOCK */}
 <div
  className="col-xl-5 col-lg-5"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="200"
>
  <div className="story-highlight story-highlight-image">
    <img
      src="assets/img/thumbs/rice-bag.webp"
      alt="MARWANN Charitable Trust community service"
      className="story-highlight-photo"
    />
  </div>
</div>

          {/* RIGHT: ORIGINAL STORY CONTENT */}
          <div
            className="col-xl-7 col-lg-7"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="common-subtitle">
              <img
                src="/assets/img/icons/icon-2.svg"
                alt=""
              />
              <span>Our Story</span>
            </div>

            <div className="common-title text-start">
              <h2>
                Serving Humanity with Compassion and Dedication
              </h2>
            </div>

            <div className="text our-story-text">
              <p>
                The story of MARWANN CHARITABLE TRUST began
                with a father's unconditional love for his
                beloved son and a heartfelt desire to transform
                personal loss into a meaningful mission of
                humanity and service. The Trust was founded by
                Samuga Sastha Dr. S. Allahuddeen on 26th
                September 2016 in Vellore, Tamil Nadu, India,
                in loving and everlasting memory of his beloved
                son, Marwann.
              </p>

              <p>
                Marwann was the beloved son of Samuga Sastha
                Dr. S. Allahuddeen, whose life was deeply
                affected by the heartbreaking news that his
                son was suffering from Stage IV blood cancer.
                Despite the hopes, prayers, and efforts
                surrounding his illness, Marwann sadly passed
                away, leaving behind an irreplaceable void in
                the life of his family. The loss of a beloved
                child is one of the greatest sorrows a parent
                can experience. However, instead of allowing
                this tragedy to become only a story of grief,
                Dr. S. Allahuddeen made a heartfelt decision
                to give his son's memory a lasting purpose
                that would continue to serve humanity for
                generations to come.
              </p>

              <p>
                With the determination to keep his son's name
                alive through acts of kindness, compassion,
                and generosity, Dr. S. Allahuddeen established
                MARWANN CHARITABLE TRUST, dedicating the
                organisation to the loving memory of Marwann.
                His vision was not simply to create a
                charitable organisation, but to build an
                institution that would stand beside people
                during their most difficult moments and extend
                a helping hand to those who have been
                neglected, disadvantaged, or deprived of
                basic necessities.
              </p>

              <p>
                From its foundation, the Trust has carried a
                mission to support poor, underprivileged,
                helpless, and needy individuals, regardless
                of their caste, religion, community, language,
                or social background. The primary objective
                has been to improve the lives of people through
                various charitable, educational, medical,
                humanitarian, and social welfare initiatives.
                The Trust believes that every human being
                deserves dignity, equal opportunities, access
                to essential services, and the right to live
                a better life.
              </p>

              <p>
                Over time, the vision of MARWANN CHARITABLE
                TRUST has extended to several important areas
                of public welfare. These include supporting
                economically disadvantaged families with
                essential living necessities, providing
                educational assistance and scholarships to
                deserving students, encouraging the education
                of children from poor backgrounds, extending
                medical and healthcare assistance to those
                unable to afford treatment, and supporting
                elderly people, persons with disabilities,
                widows, and other vulnerable members of
                society. The Trust also aims to promote skill
                development, vocational training,
                self-employment opportunities, and other
                initiatives that help individuals become
                financially independent and lead a dignified
                life.
              </p>

              <p>
                Beyond providing immediate assistance, the
                Trust believes in creating long-term positive
                changes in society. Its vision is to reach
                people who genuinely need support, identify
                their difficulties, and provide meaningful
                assistance wherever possible. Whether it is
                helping a poor family meet its basic needs,
                supporting a student's educational journey,
                assisting a sick person in receiving medical
                care, or bringing hope to an elderly person
                who has been neglected, every act of service
                represents the fundamental values upon which
                the Trust was established.
              </p>

              <p>
                MARWANN CHARITABLE TRUST believes that
                humanity has no boundaries and that kindness
                should never be limited by differences.
                Service to people is service to God, and every
                opportunity to help someone in need is an
                opportunity to make the world a better place.
                Guided by this belief, the Trust strives to
                implement its welfare activities without
                discrimination and to extend assistance to
                all sections of society to the best of its
                ability.
              </p>

              <p>
                Today, MARWANN CHARITABLE TRUST continues to
                carry forward the vision and noble intention
                of its founder, Samuga Sastha Dr. S. Allahuddeen.
                What began as a father's tribute to his beloved
                son has become a commitment to serve society,
                uplift the underprivileged, and bring hope to
                countless lives. The name MARWANN is not
                merely the name of the Trust; it represents
                a father's love, an enduring memory, and a
                promise to continue spreading kindness and
                humanity through charitable service.
              </p>

              <p>
                Our journey is inspired by love, guided by
                humanity, and dedicated to service. We believe
                that even the smallest act of kindness can
                bring a significant change to someone's life.
                Through our continued efforts, we aspire to
                reach more people, serve more communities,
                and build a society where no person is left
                behind.
              </p>

              <p>
                MARWANN CHARITABLE TRUST – Keeping a beloved
                memory alive through a lifetime of service
                to humanity.
              </p>
            </div>

            {/* GUIDING QUOTE */}
            <div className="quote-panel m-t-25">
              <p>
                “MARWANN CHARITABLE TRUST – Keeping a beloved
                memory alive through a lifetime of service
                to humanity.”
              </p>

              <span>Our guiding motto</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
