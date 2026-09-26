// import { motion, useReducedMotion } from 'framer-motion'
// import {
//   CalendarDays,
//   IndianRupee,
//   Trash2,
//   Database,
//   CloudUpload,
//   ClipboardCheck,
//   Handshake,
// } from 'lucide-react'

// import Container from '../commonComponents/Container'

// const sections = [
//   {
//     number: '01',
//     title: 'Data Retention Period',
//     icon: CalendarDays,
//     content: (
//       <p>
//         Third Eye Vision shall retain the Client&apos;s wedding photographs,
//         videos, edited files and other related digital data for a maximum
//         period of <strong>3 (three) months</strong> from the date of the
//         wedding/event.
//       </p>
//     ),
//   },

//   {
//     number: '02',
//     title: "Client's Responsibility Within 3 Months",
//     icon: IndianRupee,
//     content: (
//       <>
//         <p>
//           During the above-mentioned 3-month period, the Client shall:
//         </p>

//         <ul className="mt-3 space-y-2.5">
//           <li>
//             Clear all outstanding payments, dues or other financial
//             obligations towards Third Eye Vision.
//           </li>

//           <li>
//             Complete all pending selections, including album/photo
//             selections wherever applicable.
//           </li>

//           <li>
//             Provide required approvals, instructions and information
//             necessary for completion of pending work.
//           </li>

//           <li>
//             Download and safely preserve all photographs, videos and
//             other delivered digital files.
//           </li>
//         </ul>
//       </>
//     ),
//   },

//   {
//     number: '03',
//     title: 'Expiry of Data Retention',
//     icon: Trash2,
//     content: (
//       <p>
//         Upon completion of 3 (three) months from the date of the
//         wedding/event, Third Eye Vision shall have no obligation to retain,
//         preserve, archive or recover any Client data.
//         <br />
//         <br />
//         Third Eye Vision reserves the right to permanently delete,
//         overwrite or otherwise remove such data from its storage systems
//         after the expiry of the 3-month retention period, without further
//         notice to the Client.
//       </p>
//     ),
//   },

//   {
//     number: '04',
//     title: 'Risk of Electronic Storage',
//     icon: Database,
//     content: (
//       <p>
//         The Client acknowledges that digital data stored on electronic
//         devices, hard drives, memory systems, servers or other storage
//         media may be affected by hardware failure, data corruption,
//         accidental deletion, technical malfunction, software failure or
//         other unforeseen circumstances.
//         <br />
//         <br />
//         Accordingly, Third Eye Vision does not guarantee permanent or
//         indefinite storage of Client data, even during the applicable
//         retention period.
//       </p>
//     ),
//   },

//   {
//     number: '05',
//     title: 'Backup Responsibility',
//     icon: CloudUpload,
//     content: (
//       <p>
//         Once photographs, videos or other digital files have been
//         delivered or made available to the Client, the Client is
//         responsible for maintaining appropriate independent backups of
//         such data.
//         <br />
//         <br />
//         Third Eye Vision strongly recommends maintaining at least two
//         separate backups of all important wedding photographs and videos.
//       </p>
//     ),
//   },

//   {
//     number: '06',
//     title: 'Pending Dues & Delivery',
//     icon: ClipboardCheck,
//     content: (
//       <p>
//         Any pending delivery, album work, selection, editing or other
//         service requiring action from the Client may remain pending until
//         the Client fulfils the applicable requirements, including
//         clearance of outstanding dues.
//         <br />
//         <br />
//         The 3-month retention period does not extend automatically because
//         of pending payments, delayed selections, delayed approvals or
//         failure of the Client to collect/download the data.
//       </p>
//     ),
//   },
//   {
//     number: '07',
//     title: 'Client Acknowledgement',
//     icon: Handshake,
//     content: (
//       <p>
//         By booking or accepting services from Third Eye Vision, the
//         Client acknowledges that they have read, understood and
//         accepted this 3-Month Data Retention Policy and agree that
//         Third Eye Vision shall not be held responsible for the
//         preservation or recovery of Client data after expiry of the
//         stated retention period.
//       </p>
//     ),
//   },
// ]

// const reveal = {
//   hidden: {
//     opacity: 0,
//     y: 25,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// }

// export default function PolicyAgreementSection() {
//   const reduceMotion = useReducedMotion()

//   return (
//     <section className="relative overflow-hidden bg-ivory-100 py-16 text-charcoal-900 sm:py-20 lg:py-24">
//       {/* Background decoration */}

//         {/* =====================================================
//             SECTION HEADING
//         ====================================================== */}

//         <motion.div
//           initial={reduceMotion ? false : { opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7 }}
//           className="mx-auto max-w-2xl text-center mb-20"
//         >
//           <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.025em] sm:text-5xl lg:text-6xl">
//             Service Agreement{' '}
//             <br />
//             <span className="font-script text-gold-600 text-4xl">
//               Data Retention, Pending Dues &amp; Client Responsibility
//             </span>
//           </h2>

//           <div className="mx-auto mt-5 h-px w-10 bg-gold-500" />

//           <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-charcoal-900/50">
//             Your trust means everything to us. Here&apos;s how we handle
//             your wedding data, our responsibilities and your role in the
//             process.
//           </p>
//         </motion.div>


//       <Container className="relative z-10">
//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-2 lg:gap-x-12">
//           {/* LEFT COLUMN */}
//           <div className="relative">
//             {sections
//               .filter((_, index) => index % 2 === 0)
//               .map((section, index) => (
//                 <AgreementCard
//                   key={section.number}
//                   section={section}
//                   reduceMotion={reduceMotion}
//                   delay={index * 0.08}
//                 />
//               ))}
//           </div>

//           {/* Vertical Divider */}
//           <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-charcoal-900/10 lg:block" />

//           {/* RIGHT COLUMN */}
//           <div className="relative">
//             {sections
//               .filter((_, index) => index % 2 !== 0)
//               .map((section, index) => (
//                 <AgreementCard
//                   key={section.number}
//                   section={section}
//                   reduceMotion={reduceMotion}
//                   delay={index * 0.08}
//                 />
//               ))}
//           </div>
//         </div>

//       </Container>
//     </section>
//   )
// }

// function AgreementCard({
//   section,
//   reduceMotion,
//   delay,
// }) {
//   const Icon = section.icon

//   return (
//     <motion.article
//       variants={reveal}
//       initial={reduceMotion ? false : 'hidden'}
//       whileInView="visible"
//       viewport={{
//         once: true,
//         amount: 0.15,
//       }}
//       transition={{
//         delay,
//       }}
//       className="
//         group
//         relative
//         flex
//         gap-5
//         border-b
//         border-charcoal-900/10
//         px-2
//         py-8
//         sm:gap-6
//         sm:px-5
//         lg:px-6
//         lg:py-9
//       "
//     >
//       {/* Icon */}
//       <div className="shrink-0">
//         <div
//           className="
//             grid
//             h-14
//             w-14
//             place-items-center
//             rounded-full
//             border
//             border-gold-500/20
//             bg-gold-400/[0.10]
//             text-charcoal-900
//             transition-all
//             duration-300
//             group-hover:border-gold-500/50
//             group-hover:bg-gold-400/[0.16]
//             group-hover:text-gold-700
//             sm:h-16
//             sm:w-16
//           "
//         >
//           <Icon
//             size={25}
//             strokeWidth={1.35}
//           />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="min-w-0 flex-1">
//         {/* Number */}
//         <span
//           className="
//             inline-flex
//             items-center
//             rounded-md
//             bg-gradient-to-r
//             from-[#b99b5f]
//             to-[#e1c98a]
//             px-2.5
//             py-1
//             font-display
//             text-sm
//             font-semibold
//             leading-none
//             text-charcoal-950
//             shadow-sm
//           "
//         >
//           {section.number}
//         </span>

//         {/* Heading */}
//         <h2 className="mt-3 font-display text-xl leading-tight tracking-[-0.015em] sm:text-2xl">
//           {section.title}
//         </h2>

//         {/* Content */}
//         <div
//           className="
//             mt-4
//             text-[12px]
//             leading-6
//             text-charcoal-900/65
//             sm:text-[13px]
//             sm:leading-6
//           "
//         >
//           {section.content}
//         </div>
//       </div>
//     </motion.article>
//   )
// }



import { motion, useReducedMotion } from 'framer-motion'
import {
  CalendarDays,
  IndianRupee,
  Trash2,
  Database,
  CloudUpload,
  ClipboardCheck,
  Handshake,
} from 'lucide-react'

import Container from '../commonComponents/Container'

const sections = [
  {
    number: '01',
    title: 'Data Retention Period',
    icon: CalendarDays,
    points: [
      "Third Eye Vision shall retain the Client's wedding photographs, videos, edited files and other related digital data for a maximum period of 3 (three) months from the date of the wedding/event.",
    ],
  },

  {
    number: '02',
    title: "Client's Responsibility Within 3 Months",
    icon: IndianRupee,
    intro:
      'During the above-mentioned 3-month period, the Client shall:',
    points: [
      'Clear all outstanding payments, dues or other financial obligations towards Third Eye Vision.',
      'Complete all pending selections, including album/photo selections wherever applicable.',
      'Provide required approvals, instructions and information necessary for completion of pending work.',
      'Download and safely preserve all photographs, videos and other delivered digital files.',
    ],
  },

  {
    number: '03',
    title: 'Expiry of Data Retention',
    icon: Trash2,
    points: [
      'Upon completion of 3 (three) months from the date of the wedding/event, Third Eye Vision shall have no obligation to retain, preserve, archive or recover any Client data.',
      'Third Eye Vision reserves the right to permanently delete, overwrite or otherwise remove such data from its storage systems after the expiry of the 3-month retention period, without further notice to the Client.',
    ],
  },

  {
    number: '04',
    title: 'Risk of Electronic Storage',
    icon: Database,
    points: [
      'The Client acknowledges that digital data stored on electronic devices, hard drives, memory systems, servers or other storage media may be affected by hardware failure, data corruption, accidental deletion, technical malfunction, software failure or other unforeseen circumstances.',
      'Accordingly, Third Eye Vision does not guarantee permanent or indefinite storage of Client data, even during the applicable retention period.',
    ],
  },

  {
    number: '05',
    title: 'Backup Responsibility',
    icon: CloudUpload,
    points: [
      'Once photographs, videos or other digital files have been delivered or made available to the Client, the Client is responsible for maintaining appropriate independent backups of such data.',
      'Third Eye Vision strongly recommends maintaining at least two separate backups of all important wedding photographs and videos.',
    ],
  },

  {
    number: '06',
    title: 'Pending Dues & Delivery',
    icon: ClipboardCheck,
    points: [
      'Any pending delivery, album work, selection, editing or other service requiring action from the Client may remain pending until the Client fulfils the applicable requirements, including clearance of outstanding dues.',
      'The 3-month retention period does not extend automatically because of pending payments, delayed selections, delayed approvals or failure of the Client to collect/download the data.',
    ],
  },

  {
    number: '07',
    title: 'Client Acknowledgement',
    icon: Handshake,
    points: [
      'By booking or accepting services from Third Eye Vision, the Client acknowledges that they have read, understood and accepted this 3-Month Data Retention Policy and agree that Third Eye Vision shall not be held responsible for the preservation or recovery of Client data after expiry of the stated retention period.',
    ],
  },
]

const reveal = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function PolicyAgreementSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-ivory-100 py-16 text-charcoal-900 sm:py-20 lg:py-24">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-gold-400/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-charcoal-900/[0.025] blur-3xl" />

      <Container className="relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-600">
            Service Agreement
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl">
            Service Agreement
            <br />

            <span className="font-script text-3xl text-gold-600 sm:text-4xl">
              Data Retention, Pending Dues &amp; Client Responsibility
            </span>
          </h2>

          <div className="mx-auto mt-5 h-px w-10 bg-gold-500" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-charcoal-900/50">
            Your trust means everything to us. Here&apos;s how we handle
            your wedding data, our responsibilities and your role in the
            process.
          </p>
        </motion.div>

        {/* Main Agreement Grid */}
        <div className="grid gap-x-10 lg:grid-cols-2">

          {/* LEFT COLUMN */}
          <div>
            {sections
              .filter((_, index) => index === 0 || index === 2 || index === 4 || index === 6)
              .map((section, index) => (
                <AgreementCard
                  key={section.number}
                  section={section}
                  reduceMotion={reduceMotion}
                  delay={index * 0.08}
                />
              ))}
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {sections
              .filter((_, index) => index === 1 || index === 3 || index === 5)
              .map((section, index) => (
                <AgreementCard
                  key={section.number}
                  section={section}
                  reduceMotion={reduceMotion}
                  delay={index * 0.08}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function AgreementCard({
  section,
  reduceMotion,
  delay,
  fullWidth = false,
}) {
  const Icon = section.icon

  return (
    <motion.article
      variants={reveal}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay,
      }}
      className={`
        group
        relative
        border-b
        border-charcoal-900/10
        py-7
        sm:py-8
        ${fullWidth ? 'lg:mt-2' : ''}
      `}
    >
      <div className="flex gap-4 sm:gap-5">

        {/* ICON */}
        <div className="shrink-0">
          <div
            className="
              grid
              h-12
              w-12
              place-items-center
              rounded-full
              border
              border-gold-500/20
              bg-gold-400/[0.08]
              text-charcoal-900
              transition-all
              duration-300
              group-hover:border-gold-500/50
              group-hover:bg-gold-400/[0.14]
              group-hover:text-gold-700
              sm:h-14
              sm:w-14
            "
          >
            <Icon
              size={22}
              strokeWidth={1.35}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="min-w-0 flex-1">

          {/* NUMBER */}
          <span
            className="
              inline-flex
              rounded-md
              bg-gradient-to-r
              from-[#b99b5f]
              to-[#e1c98a]
              px-2.5
              py-1
              font-display
              text-xs
              font-semibold
              leading-none
              text-charcoal-950
            "
          >
            {section.number}
          </span>

          {/* TITLE */}
          <h3 className="mt-3 font-display text-lg leading-tight sm:text-xl">
            {section.title}
          </h3>

          {/* INTRO */}
          {section.intro && (
            <p className="mt-3 text-[11px] leading-5 text-charcoal-900/65 sm:text-xs">
              {section.intro}
            </p>
          )}

          {/* POINTS */}
          <ul className="mt-3 space-y-2.5">
            {section.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-[11px] leading-5 text-charcoal-900/65 sm:text-xs"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold-600" />

                <span>{point}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* GOLD HOVER LINE */}
      <span
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-gold-500
          transition-all
          duration-500
          group-hover:w-12
        "
      />
    </motion.article>
  )
}