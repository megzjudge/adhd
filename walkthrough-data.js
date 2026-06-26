// Site owner's own DIVA-5 written answers, mapped to the criteria they belong to.
// This demonstrates the depth of the DIVA: every criterion is explored with
// real-life examples across adulthood and childhood. Edit or trim freely.

const WALKTHROUGH = [
  {
    code: 'A1', cat: 'Inattention',
    title: 'Fails to give close attention to detail / careless mistakes',
    notes: [
      "Every test result at school would be \u201cgreat answer, did not read the question correctly.\u201d I'd get excited after reading half of it, my head would fill with a hundred answers and I'd just power on, assuming I knew the answer before finishing reading the question. 85% of the time it isn't an issue because context is enough \u2014 it's the 15% where the end of the question alters the first half and the answer becomes wildly inappropriate. Happened to me probably even at university. It's an inherent excitement issue that's hard to stop \u2014 the adrenaline-dopamine rush of showing your intellect to the Other.",
    ],
  },
  {
    code: 'A2', cat: 'Inattention',
    title: 'Difficulty sustaining attention',
    notes: [
      "I realised at about 8 that my greatest fear was boredom \u2014 I can date the memory from the keyboard style and what I was making. After that I tried overly hard to never be bored. At school I'd bring a myriad of random things in my backpack and write stories and character profiles for hours. You could sit me next to absolutely anyone and I'd get in trouble for talking. In one year-8 language class I'd be eating chips, reading a book, listening to the teacher and daydreaming all at once \u2014 the teacher once tried to catch me out and I answered correctly, to her disappointment. I liked the class; I was just bored.",
    ],
  },
  {
    code: 'A3', cat: 'Inattention',
    title: 'Does not seem to listen when spoken to',
    notes: [
      "If I read, sometimes I'm daydreaming and read without registering it and have to go back. Same in conversation \u2014 but mostly I just \u201cdual boot.\u201d I daydream while someone talks and reconstruct what they said from when I last paid attention and what I expect they want to hear, so it's barely noticeable. As an ESL teacher I taught that there are filler words and context words; skim-listening means catching only the context words. My brain does that even while my mind is mostly elsewhere.",
    ],
  },
  {
    code: 'A4', cat: 'Inattention',
    title: 'Does not follow through / fails to finish',
    notes: [
      "My mother says by Grade 2 I was getting in trouble for not completing homework.",
      "In year six I did no homework the entire year, to the fury of my teacher. The school moved me from a stern teacher to a softer one whom I walked all over. I needed the disagreeable teacher and remember her fondly \u2014 she wrote a lot on either side of the board and I never forgot they were two separate words.",
    ],
  },
  {
    code: 'A5', cat: 'Inattention',
    title: 'Difficulty organising tasks',
    notes: [
      "As an adult I have nothing I can leave in a pile on the floor \u2014 minimalist by design (trinkets but not things; paper is scanned to a hard drive; I donate old clothes whenever I buy new). My chaos is fully digitised now: my cloud and ten hard drives are total chaos, but only I can see it. Physically I look structured; internally it's a hundred tabs open at once. I vibe-coded myself a calendar and still forget to check it, but at least the skeleton is there. I'm incredibly time-poor \u2014 it's 10pm then suddenly 2am. I'm always about 15 minutes late.",
      "Childhood: I can always entertain myself. Give me a speck of dust and I'll sit conceptualising how dust forms, why it's grey, whether dropped hair counts, what a cloth is made of, whether cloth is to dust as feeding chicken to a chicken \u2014 constant lateral thinking.",
    ],
  },
  {
    code: 'A6', cat: 'Inattention',
    title: 'Avoids sustained mental effort',
    notes: [
      "I always do the most difficult tasks and then completely avoid the easy ones. Riding horses, I could control the naughty horses other kids got bucked off by \u2014 my mum bit her nails watching small me stay stoic on rearing horses \u2014 yet I struggled to get a slow, plodding horse to just move forward. I can control a bullet train trying to throw me off more easily than I can convince a slow horse to walk. I revere the latter; it's just opposite to my nature.",
    ],
  },
  {
    code: 'A7', cat: 'Inattention',
    title: 'Loses things',
    notes: [
      "When I worked in China for six months I locked myself out of the school about three times. I lose my phone, keys, wallet now and then \u2014 so I carry no bag (I'd leave it somewhere) and tap my three pockets regularly to check everything's there.",
      "Childhood: I can usually find what I've left by recounting my physical actions \u2014 I've always had good recall \u2014 but I get the \u201cwhere did I put that\u201d far more than average, and people have had to go back with me to find things left in the classroom, caf\u00e9, or bathroom.",
    ],
  },
  {
    code: 'A8', cat: 'Inattention',
    title: 'Easily distracted by external stimuli',
    notes: [
      "\u201cI am the distraction\u201d for others is fair. How distracted I am depends on absorption: listening intently, nothing distracts me; otherwise anything can, because I'm hunting for novel stimuli. I need bathrooms close to where I work, because if anyone talks to me mid-writing-sequence I lose the thread \u2014 hours of work \u2014 and the frustration is extreme, like a scratched record that insists it's still playing but is incomplete. It's the jolt from the unconscious creative state to the conscious one; it takes 30+ minutes to return, if I can.",
    ],
  },
  {
    code: 'H/I 4', cat: 'Hyperactivity',
    title: 'Difficulty engaging in leisure quietly / too cocky in public',
    notes: [
      "I broke my arm trying to impress a girl I was competing with, getting off a horse that had already stopped. Another day I decided I could do a backflip outside the science labs and landed flat on my back. I'm intensely aware of the risk in this part of my personality and have spent years curbing it \u2014 I deliberately drag out learning new skills so I don't peacock and get myself ostracised or hurt.",
    ],
  },
  {
    code: 'H/I 6', cat: 'Impulsivity',
    title: 'Talks excessively',
    notes: [
      "My issue isn't interjecting like other assertive people \u2014 it's slowing down for less assertive people to find the courage to interject. I'm usually observant of others' discomfort and try to draw them out by getting visibly more excited when they offer an opinion. Remembering to ask them is hard; both my parents are big talkers, so I was raised to \u201cspeak when you want to,\u201d and I forget others weren't \u2014 but eventually I notice and ask.",
    ],
  },
  {
    code: 'H/I 7', cat: 'Impulsivity',
    title: 'Blurts out answers before questions finish',
    notes: [
      "The difference between me and my father is that he's sometimes unaware he's said something against the status quo, whereas I'm fully aware and deliberately make faux pas, because the status quo is usually unrepresentative of reality. If I say 2 + 2 = window and everyone gets inflamed, that's a good test of how closed they are; \u20184\u2019 was deviant once too.",
      "Childhood: teacher's pet until year 3, a deviant after.",
    ],
  },
  {
    code: 'H/I 8', cat: 'Impulsivity',
    title: 'Difficulty awaiting turn',
    notes: [
      "It's not the queue itself, it's the precognition of the queue \u2014 anticipatory boredom rather than in-the-moment. Stuck in traffic once in a while, I don't care; daily, it becomes intense frustration.",
    ],
  },
  {
    code: 'H/I 9', cat: 'Impulsivity',
    title: 'Interrupts or intrudes on others',
    notes: [
      "I'm actually an avid people-watcher because I want novel information \u2014 I want them to do something so I can observe it, more than I want to outshine them. I often don't intervene even when I foresee a fault, because everyone can see their own faults eventually, and people often solve their self-made problems more cleverly than I would have. I have a break-it-and-fix-it, highly systematic mind, and I like watching other people's fixing systems too.",
    ],
  },
  {
    code: 'Impairment', cat: 'Criterion C \u2014 Education',
    title: 'Functional impact: education',
    notes: [
      "I have several uni degrees, diplomas and TAFE certificates. At uni I routinely forgot an assessment due date and had to resit the whole unit, or misread a major question and had to resubmit or failed because of it.",
    ],
  },
  {
    code: 'Impairment', cat: 'Criterion C \u2014 Social',
    title: 'Functional impact: social contacts',
    notes: [
      "I'm super gregarious \u2014 people were never my issue. So much so that I had about 150 people at my 18th from multiple circles (work, school, older nerds, a large goth scene from early online social networks). I burnt out on sociability young and now get bored by repetitive social activity \u2014 my brain says \u201cI could be home coding, watching a podcast, gaming.\u201d Most of this happened before 19 and resolved by about 25 when I forced myself into a more introverted life.",
    ],
  },
  {
    code: 'Impairment', cat: 'Criterion C \u2014 Free time',
    title: 'Functional impact: free time & relaxation',
    notes: [
      "I can relax very well; the problem is the lack of orderliness about when to relax. Put me in a museum and I'm the calmest bird that ever flew \u2014 but with stimuli around me, I buzz.",
      "I read Harry Potter 3 about 18 times in year six and ploughed through whole pony series \u2014 always an avid reader. As an adult my issue is compartmentalising distractions: living in a van at 25 I read ~10 books in two weeks. I love reading but find it hard to justify when I could be building something that \u201clasts.\u201d So I try audiobooks \u2014 an hour or two once a fortnight \u2014 but I do always aim to finish them, and usually eventually do.",
    ],
  },
];
