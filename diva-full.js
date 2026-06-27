// Full filled DIVA-5 (from ADHD.ods). question = overall question;
// comments[].paras = paragraph list (line breaks restored from answers.txt).
const DIVA_FULL = [
 {
  "type": "part",
  "title": "Part 1 · Attention Deficit"
 },
 {
  "type": "criterion",
  "code": "A-1",
  "question": "Do you often fail to give close attention to detail, or do you make careless mistakes in your work or during other activities? And how was that during childhood?",
  "adult": [
   {
    "t": "Makes careless mistakes",
    "c": true
   },
   {
    "t": "Works slowly to avoid mistakes",
    "c": false
   },
   {
    "t": "Does not read instructions carefully",
    "c": true
   },
   {
    "t": "Difficulty working in a detailed way",
    "c": false
   },
   {
    "t": "Too much time needed to complete detailed tasks",
    "c": false
   },
   {
    "t": "Gets easily bogged down by details",
    "c": false
   },
   {
    "t": "Works too quickly and therefore makes mistakes",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Careless mistakes in schoolwork",
    "c": true
   },
   {
    "t": "Mistakes made by not reading questions properly",
    "c": true
   },
   {
    "t": "Leaves questions unanswered by not reading them properly",
    "c": true
   },
   {
    "t": "Leaves the reverse side of a test unanswered",
    "c": true
   },
   {
    "t": "Others comment about careless work",
    "c": false
   },
   {
    "t": "Not checking the answers in homework",
    "c": false
   },
   {
    "t": "Too much time needed to complete detailed tasks",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "Lol every test result at school would be, \"great answer, did not read the question correctly.\" I'd get excited after reading half of it, my head would fill with a hundred answers and I'd just power on answering it, assuming I knew before finishing reading the question fully. 85% of the time it isn't an issue because your understanding of context is enough to understand it fully, its the 15% of the time where the end of the question alters the prior half of the statement and your answer becomes wildly inappropriate for the overall question unfortunately. Happened to me I think probably even at university. I recall really focuing on it in my later years of high school but, it is an inherant excitement issue thats hard to stop the adrenaline-dopamine rush of showing your intellect to the Other, possibly so hard to control because there is FEW places to do that in an averaged clustered human environment."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "A-2",
  "question": "Do you often find it difficult to sustain your attention on tasks? And how was that during childhood?",
  "adult": [
   {
    "t": "Not able to keep attention on tasks for long*",
    "c": false
   },
   {
    "t": "Quickly distracted by own thoughts or associations",
    "c": true
   },
   {
    "t": "Finds it difficult to watch a film through to the end, or to read a book*",
    "c": false
   },
   {
    "t": "Quickly becomes bored with things*",
    "c": true
   },
   {
    "t": "Asks questions about subjects that have already been discussed",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Difficulty keeping attention on schoolwork",
    "c": true
   },
   {
    "t": "Difficulty keeping attention on play*",
    "c": false
   },
   {
    "t": "Easily distracted",
    "c": true
   },
   {
    "t": "Difficulty concentrating*",
    "c": false
   },
   {
    "t": "Needing structure to avoid becoming distracted",
    "c": false
   },
   {
    "t": "Quickly becoming bored of activities*",
    "c": true
   }
  ],
  "comments": [
   {
    "sec": "C",
    "paras": [
     "I realised at about 8 - I remember where i was and what I was doing when I had the epiphony so have gauged my age from the visual things within the environnment in the memory (style of keyboard, what I was creating, etc); my greatest fear was boredom. Thereafter I tried overly hard to make sure I was never bored. At school I would bring a myriad of random things with me in my backpack and would write for hours and hours stories, and character profiles etc. I would ask the teachers questions, talk and distract whomever was sitting next to me - you could put me next to absolutely anyone and I'd still get in trouble for talking. Or if I recall one language class in year 8 - I'd be eating chips, reading a book, listening to the teacher and daydreaming at the same time - I recall this because the teacher asked me an answer seemingly to alert me to the fact i couldn't possibly be paying attention and correctly answered her, to her dissapointment. It was one of my preferred classes, so I did not dislike the content, I was just.. bored."
    ]
   }
  ],
  "notes": [
   "*Unless the subject is found to be really interesting (e.g. computer or hobby)"
  ]
 },
 {
  "type": "criterion",
  "code": "A-3",
  "question": "Does it often seem as though you are not listening when you are spoken to directly? And how was that during childhood?",
  "adult": [
   {
    "t": "Dreamy or preoccupied",
    "c": true
   },
   {
    "t": "Difficulty concentrating on a conversation",
    "c": false
   },
   {
    "t": "Afterwards, not knowing what a conversation was about",
    "c": false
   },
   {
    "t": "Often changing the subject of the conversation",
    "c": true
   },
   {
    "t": "Others saying that your thoughts are somewhere else",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Not knowing what parents/teachers have said",
    "c": false
   },
   {
    "t": "Dreamy or preoccupied",
    "c": true
   },
   {
    "t": "Only listening during eye contact or when a voice is raised",
    "c": false
   },
   {
    "t": "Often having to be addressed again",
    "c": false
   },
   {
    "t": "Questions having to be repeated",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "C",
    "paras": [
     "If I sit and consume a book, sometimes I will be daydreaming and read but not realise what I've read and have to go back and re-read. I believe this also happens in conversation. But often, I just \"dual boot\" as one would call it in IT. I daydream whilst someone is talking and can gauge what they have said if I wasn't 100% attentive to them based on when I last was paying attention and what I expect they want to hear - so its far less noticable to them or me how often I do this as its automatic processing. Ie, sentence structure is predictive (as an ESL teacher I taught students there are two kinds of words, filler words and context words - to speed up your listening, like skim reading, skim listening means to only listen to context words) and so I feel my brain does this even when I am daydreaming whilst listening and I piece those words together to understand enough even if my mind is nearly fully elsewhere."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "A-4",
  "question": "Do you often fail to follow through on instructions and do you often fail to finish jobs or fail to meet obligations at work? And how was that during childhood (when doing schoolwork as opposed to when at work)?",
  "adult": [
   {
    "t": "Does things that are muddled up together without completing them",
    "c": false
   },
   {
    "t": "Difficulty completing tasks once the novelty has worn off",
    "c": true
   },
   {
    "t": "Needing a time limit to complete tasks",
    "c": false
   },
   {
    "t": "Difficulty completing administrative tasks",
    "c": false
   },
   {
    "t": "Difficulty following instructions from a manual",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Difficulty following instructions",
    "c": false
   },
   {
    "t": "Difficulty with instructions involving more than one step",
    "c": false
   },
   {
    "t": "Not completing things",
    "c": true
   },
   {
    "t": "Not completing homework or handing it in",
    "c": true
   },
   {
    "t": "Needing a lot of structure in order to complete tasks",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "C",
    "paras": [
     "My mother says by Grade 2 I was getting in trouble for not completing homework.",
     "In year six I did no homework the entire year to the sheer fury of my teacher - the school moved me from a disagreeable stern teacher into a softer amiable teacher whom I walked all over the entire year unfortunately for her. I needed the disagreeable teacher and remember her fondly even though I only had a few weeks (she wrote a and lot on either side of the board and I never forgot they were two separate words), even though the first class was a lower intellect class level."
    
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "A-5",
  "question": "Do you often find it difficult to organise tasks and activities? And how was that during childhood?",
  "adult": [
   {
    "t": "Difficulty with planning activities of daily life",
    "c": true
   },
   {
    "t": "House and/or workplace are disorganised",
    "c": false
   },
   {
    "t": "Planning too many tasks or non-efficient planning",
    "c": false
   },
   {
    "t": "Regularly booking things to take place at the same time (double-booking)",
    "c": true
   },
   {
    "t": "Arriving late",
    "c": true
   },
   {
    "t": "Not able to use an agenda or diary consistently",
    "c": true
   },
   {
    "t": "Inflexible because of the need to keep to schedules",
    "c": false
   },
   {
    "t": "Poor sense of time",
    "c": true
   },
   {
    "t": "Creating schedules but not using them",
    "c": false
   },
   {
    "t": "Needing other people to structure things",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Difficulty being ready on time",
    "c": true
   },
   {
    "t": "Messy room or desk",
    "c": true
   },
   {
    "t": "Difficulty playing alone",
    "c": false
   },
   {
    "t": "Difficulty planning tasks or homework",
    "c": true
   },
   {
    "t": "Doing things in a muddled way",
    "c": false
   },
   {
    "t": "Arriving late",
    "c": true
   },
   {
    "t": "Poor sense of time",
    "c": true
   },
   {
    "t": "Difficulty keeping himself/herself entertained",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "Now, so what I have done as an adult. Have absolutely nothing that I can leave in a pile on the floor - I have a minimalist kind of lifestyle (i have trinkets but not things, any paper is scanned onto a harddrive, everytime i buy new clothes I donate old ones, I make no mental decisions about clothes and just wash them regardless of dirty or not, etc), my issue is entirely digitised now - my cloud, my 10 harddrives, are all total chaos. But only I can see their chaos, physically I look quite structured, but I can see my hundred tabs open at the same time - even if nobody else can. I vibe-coded myself a calendar, I still forget to check it but at least its there as a skeleton and if I need to double check a future event its there - a little bit sketchy still as to whether I'll remember to check it but yea. Hyperimmersion does that. I am incredibly time poor. Its 10pm then its 2am very quickly. My mother is incredibly time sensitive, so I developed a decent ability of arriving on time, but I am always still like 15 minutes late - but I don't have \"south american time\" nor \"german time\", its somewhere inbetween, my mum has german time definitely - shes very high conscientiousness."
    ]
   },
   {
    "sec": "C",
    "paras": [
     "I always can entertain myself. Give me a spec of dust and I will sit conceptualising how dust is formed and how it sits on things like it does, and what dust actually is on contents, and how much dust has to form before one calls it dusty, or why is dust white or grey, is dropped hair dust, why is dust conductive to a wet cloth, how does water pool on a cloth exactly, what are cloths made out of, is a cloth made out of a similar substance to dust, is a cloth to dust like feeding chicken to a chicken is? and so on... that is my brain. Lateral thinking constantly."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "A-6",
  "question": "Do you often avoid (or do you have an aversion to, or are you unwilling to do) tasks which require sustained mental effort? And how was that during childhood?",
  "adult": [
   {
    "t": "Do the easiest or nicest things first of all",
    "c": false
   },
   {
    "t": "Often postpone boring or difficult tasks",
    "c": false
   },
   {
    "t": "Postpone tasks so that deadlines are missed",
    "c": false
   },
   {
    "t": "Avoid monotonous work, such as administration",
    "c": false
   },
   {
    "t": "Do not like reading due to mental effort",
    "c": false
   },
   {
    "t": "Avoidance of tasks that require a lot of concentration",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Avoidance of homework or has an aversion to this",
    "c": true
   },
   {
    "t": "Reads few books or does not feel like reading due to mental effort",
    "c": false
   },
   {
    "t": "Avoidance of tasks that require a lot of concentration",
    "c": false
   },
   {
    "t": "Aversion to school subjects that require a lot of concentration",
    "c": false
   },
   {
    "t": "Often postpones boring or difficult tasks.",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "I always do the most difficult tasks, and then completely avoid the easy ones. Even when I used to ride horses, I would be able to control the naughty horses that other kids at each riding school would struggle with (like some horses would buck off a girl one week, etc and start to get a name for being difficult, and that'd be the horse I'd end up on - my mum tells stories of biting her nails as she'd watch micro small child me on horses bucking and rearing and I'd stay stoic and hold on) and yet I recall struggling to control the simple plodding ones. Ie, I can control a fast moving bullet train that tries to throw you off repeatedly much easier than I can convince a slow horse to just move forward. I revere the latter though, its just opposite to my being so harder for me.",
     "In MBTI they refer to this thing called Si-loop, in regards to administration or boring tasks, often I get some popcorn or something and then just sit in Si-loop to do it for hours and hours and hours. An organisational task or copy-paste repetition task. I cannot do, creative, admin, creative, admin - my brain is in \"off\" mode doing the admin, which creates mental pressure, but the monotony is also Ego gratifying in a way. I listen to a podcast or video whilst doing the monotonous task."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "A-7",
  "question": "Do you often lose things that are needed for tasks or activities? And how was that during childhood?",
  "adult": [
   {
    "t": "Mislays wallet, keys, or agenda",
    "c": true
   },
   {
    "t": "Often leaves things behind",
    "c": true
   },
   {
    "t": "Loses papers for work",
    "c": false
   },
   {
    "t": "Loses a lot of time searching for things",
    "c": false
   },
   {
    "t": "Gets in a panic if other people move things around",
    "c": false
   },
   {
    "t": "Stores things away in the wrong place",
    "c": false
   },
   {
    "t": "Loses notes, lists or telephone numbers",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Loses diaries, pens, gym kit or other items",
    "c": true
   },
   {
    "t": "Mislays toys, clothing, or homework",
    "c": true
   },
   {
    "t": "Spends a lot of time searching for things",
    "c": false
   },
   {
    "t": "Gets in a panic if other people move things around",
    "c": false
   },
   {
    "t": "Comments from parents and/or teacher about things being lost",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "When I worked in china for six months, I locked myself out of the school I believe three times.",
     "I lose my phone, keys, wallet every now and again. I have obviously strategies on how not to do this.",
     "Similar to prior, \"I have nothing so can lose nothing\". I carry no bag, because I will inevitably leave it somewhere. I tap my pockets to make sure all 3 have something in it semi-regularly. Etc."
    ]
   },
   {
    "sec": "C",
    "paras": [
     "Generally speaking, I can find where I've left something by recounting my physical actions in my head and I've always had good mental recall I guess. But I do have the \"where did i put that\" much more than the average person and people having to go back with me to find the thing I've left behind in the classroom, or in the cafe, or in the bathroom, etc. The headphones I've dropped on the floor, etc."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "A-8",
  "question": "Are you often easily distracted by external stimuli? And how was that during childhood?",
  "adult": [
   {
    "t": "Difficulty shutting off from external stimuli",
    "c": true
   },
   {
    "t": "After being distracted, difficult to pick up the thread again",
    "c": true
   },
   {
    "t": "Easily distracted by noises or events",
    "c": false
   },
   {
    "t": "Easily distracted by the conversations of others",
    "c": false
   },
   {
    "t": "Difficulty in filtering and/or selecting information",
    "c": true
   }
  ],
  "child": [
   {
    "t": "In the classroom, often looking outside",
    "c": true
   },
   {
    "t": "Easily distracted by noises or events",
    "c": true
   },
   {
    "t": "After being distracted, has difficulty picking up the thread again",
    "c": true
   }
  ],
  "comments": [
   {
    "sec": "C",
    "paras": [
     "To be honest, \"I am the distraction\", for others is a valid input. Depends how absorbed I am as to how distracted I am. If I am listening intently 0% of things distract me, but often anything at all can distract me, I am looking for any stimuli for new novel information.",
    "I have this thing about bathrooms being close to where I'm working - some of this is due to the fact that if anyone talks to me, I realised this as a teen, if anyone talks to me mid-writing-sequence-thoughts, I'd lose hours of work because I'd lost the continuation into the future. I'd lose the thread as the test would put it. The amount of frustration I experience when this happens is extreme - it would be the equivalent of eating 1/2 a chip, or cutting off sex midway before orgasm, or someone handing you a half finished test and saying they 100% completed it. Your brain cannot compute the \"error\" in this sense, its like a broken record scratched, it says its still going, but its \"incomplete\". The brain cannot compute that its no longer where it was, after 4 hours of following a thought, it takes at least 30 minutes to return, if you even can return back to where that four hours of thinking left off. I'd imagine its sharp adjustment from the unconscious (passive, mediumship-influx, creative) to the conscious state (physical typing, observation of self, awareness of environment) etc. When I am deep in writing I no longer am aware of who or where I am for example, so deep in, I gather, the unconscious that when shocked back to the conscious (someone asks you a question where you have to be mentally present) it disconnects the two states. Say something like being asleep or ayahuasca would stop the conscious from overriding the unconscious."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "A-9",
  "question": "Are you often forgetful during daily activities? And how was that during childhood?",
  "adult": [
   {
    "t": "Forgets appointments or other obligations",
    "c": true
   },
   {
    "t": "Forgets keys, agenda etc.",
    "c": true
   },
   {
    "t": "Needs frequent reminders for appointments",
    "c": true
   },
   {
    "t": "Returning home to fetch forgotten things",
    "c": true
   },
   {
    "t": "Rigid use of lists to make sure things aren’t forgotten",
    "c": false
   },
   {
    "t": "Forgets to keep or look at daily agenda",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Forgets appointments or instructions",
    "c": true
   },
   {
    "t": "Has to be frequently reminded of things",
    "c": true
   },
   {
    "t": "Half-way through a task, forgetting what has to be done",
    "c": true
   },
   {
    "t": "Forgets to take things to school",
    "c": true
   },
   {
    "t": "Leaving things behind at school or at friends’ houses",
    "c": true
   }
  ],
  "comments": [],
  "notes": []
 },
 {
  "type": "part",
  "title": "Part 2 · Hyperactivity / Impulsivity"
 },
 {
  "type": "criterion",
  "code": "H/I-1",
  "question": "Do you often move your hands or feet in a restless manner, or do you often fidget in your chair? And how was that during childhood?",
  "adult": [
   {
    "t": "Difficulty sitting still",
    "c": false
   },
   {
    "t": "Fidgets with the legs",
    "c": false
   },
   {
    "t": "Tapping with a pen or playing with something",
    "c": true
   },
   {
    "t": "Fiddling with hair or biting nails",
    "c": true
   },
   {
    "t": "Able to control restlessness, but feels stressed as a result",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Parents often said “sit still” or similar",
    "c": false
   },
   {
    "t": "Fidgets with the legs",
    "c": false
   },
   {
    "t": "Tapping with a pen or playing with something",
    "c": true
   },
   {
    "t": "Fiddling with hair or biting nails",
    "c": true
   },
   {
    "t": "Unable to remain seated in a chair in a relaxed manner",
    "c": false
   },
   {
    "t": "Able to control restlessness, but feels stressed as a result",
    "c": false
   }
  ],
  "comments": [],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "H/I-2",
  "question": "Do you often stand up in situations where the expectation is that you should remain in your seat? And how was that during childhood?",
  "adult": [
   {
    "t": "Avoids symposiums, lectures, church etc.",
    "c": false
   },
   {
    "t": "Prefers to walk around rather than sit",
    "c": false
   },
   {
    "t": "Never sits still for long, always moving around",
    "c": false
   },
   {
    "t": "Stressed owing to the difficulty of sitting still",
    "c": false
   },
   {
    "t": "Makes excuses in order to be able to walk around",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Often stands up while eating or in the classroom",
    "c": false
   },
   {
    "t": "Finds it very difficult to stay seated at school or during meals",
    "c": false
   },
   {
    "t": "Being told to remain seated",
    "c": false
   },
   {
    "t": "Making excuses in order to walk around",
    "c": false
   }
  ],
  "comments": [],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "H/I-3",
  "question": "Do you often feel restless? And how was that during childhood?",
  "adult": [
   {
    "t": "Feeling restless or agitated inside",
    "c": false
   },
   {
    "t": "Constantly having the feeling that you have to be doing something",
    "c": true
   },
   {
    "t": "Finding it hard to relax",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Always running around",
    "c": false
   },
   {
    "t": "Climbing on furniture, or jumping on the sofa",
    "c": false
   },
   {
    "t": "Climbing in trees",
    "c": true
   },
   {
    "t": "Feeling restless inside",
    "c": true
   }
  ],
  "comments": 
   [
   "I broke my arm trying to impress a girl I was competing with, getting off a horse that was standing still (had come to a stop). I decided one day outside the science labs with my friends at lunchtime, that I thought I could do a backflip and landed flat on my back (luckily unhurt from my bravado), as some examples. I am intensely aware of the risks to this portion of my personality and have spent many years curbing my enthusiasm - I often enlongate out the easy learning of new hobbies or job skills to slow down my ability to peacock around my knowledge and get myself ostracised or physically endangered. Ie, I overcomplicate and do very hard \"end game\" things in a new job/hobby first to buffer my self-confidence so that if I do act cocky, its more valid and I can then control the situation if it gets out of hand due to my lack of attentiveness."
   ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "H/I-4",
  "question": "Do you often find it difficult to engage in leisure activities quietly? And how was that during childhood?",
  "adult": [
   {
    "t": "Talks during activities when this is not appropriate",
    "c": true
   },
   {
    "t": "Becoming quickly too cocky in public",
    "c": true
   },
   {
    "t": "Being loud in all kinds of situations",
    "c": true
   },
   {
    "t": "Difficulty doing activities quietly",
    "c": false
   },
   {
    "t": "Difficulty in speaking softly",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Being loud-spoken during play or in the classroom",
    "c": true
   },
   {
    "t": "Unable to watch TV or films quietly",
    "c": false
   },
   {
    "t": "Asked to be quieter or calm down",
    "c": true
   },
   {
    "t": "Becoming quickly too cocky in public",
    "c": true
   }
  ],
  "comments": [
   {
    "sec": "C",
    "paras": [
     "I broke my arm trying to impress a girl I was competing with, getting off a horse that was standing still (had come to a stop). I decided one day outside the science labs with my friends at lunchtime, that I thought I could do a backflip and landed flat on my back (luckiky unhurt from my bravado), as some examples.",
     "I am intensely aware of the risks to this portion of my personality and have spent many years curbing my enthusiasm - I often enlongate out the easy learning of new hobbies or job skills to slow down my ability to peacock around my knowledge and get myself ostracised or physically endangered. Ie, I overcomplicate and do very hard \"end game\" things in a new job/hobby first to buffer my self-confidence so that if I do act cocky, its more valid and I can then control the situation if it gets out of hand due to my lack of attentiveness."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "H/I-5",
  "question": "Are you often on the go or do you often act as if “driven by a motor”? And how was that during childhood?",
  "adult": [
   {
    "t": "Always busy doing something",
    "c": true
   },
   {
    "t": "Has too much energy, always on the move",
    "c": true
   },
   {
    "t": "Stepping over own boundaries",
    "c": true
   },
   {
    "t": "Finds it difficult to let things go, excessively driven",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Constantly busy",
    "c": true
   },
   {
    "t": "Excessively active at school and at home",
    "c": false
   },
   {
    "t": "Has lots of energy",
    "c": true
   },
   {
    "t": "Always on the go, excessively driven",
    "c": false
   }
  ],
  "comments": [],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "H/I-6",
  "question": "Do you often talk excessively? And how was that during childhood?",
  "adult": [
   {
    "t": "So busy talking that other people find it tiring",
    "c": true
   },
   {
    "t": "Known to be an incessant talker",
    "c": true
   },
   {
    "t": "Finds it difficult to stop talking",
    "c": true
   },
   {
    "t": "Tendency to talk too much",
    "c": true
   },
   {
    "t": "Not giving others room to interject during a conversation",
    "c": false
   },
   {
    "t": "Needing a lot of words to say something",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Known as a chatterbox",
    "c": true
   },
   {
    "t": "Teachers and parents often ask you to be quiet",
    "c": true
   },
   {
    "t": "Comments in school reports about talking too much",
    "c": true
   },
   {
    "t": "Being punished for talking too much",
    "c": true
   },
   {
    "t": "Keeping others from doing schoolwork by talking too much",
    "c": true
   },
   {
    "t": "Not giving others room during a conversation",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "The issue is not, like other assertive people will always interject, its slowing down for those less assertive to find the courage to interject. I am generally pretty observant of other people's discomfort, and try to push them to be more confident to interject in conversation with me - by showing I get more exciteable when they give their opinion, etc - give positive feedback. It's very hard for me to remember to ask them, both my parents are big talkers so I was raised in an environment that, \"you speak when you want to\", its hard for me to remember other people don't but eventually I do acknowledge and ask their opinion if they don't have the courage to do so."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "H/I-7",
  "question": "Do you often give the answer before questions have been completed? And how was that during childhood?",
  "adult": [
   {
    "t": "Being a blabbermouth, saying what you think",
    "c": true
   },
   {
    "t": "Saying things without thinking first",
    "c": true
   },
   {
    "t": "Giving people answers before they have finished speaking",
    "c": true
   },
   {
    "t": "Completing other people’s words",
    "c": true
   },
   {
    "t": "Being tactless",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Being a blabbermouth, saying things without thinking first",
    "c": true
   },
   {
    "t": "Wants to be the first to answer questions at school",
    "c": false
   },
   {
    "t": "Blurts out an answer even if it is wrong",
    "c": false
   },
   {
    "t": "Interrupts others before sentences are finished",
    "c": true
   },
   {
    "t": "Coming across as being tactless",
    "c": true
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "The difference between me and my father sometimes is that he is sometimes acutely unaware what he has said is against the status-quo whereas I am entirely aware and purposefully make faux pas because I think the status quo is usually unrepresentative of reality. If I say 2 + 2 = window, and everyone gets inflamed, then its a good test to show they're moronicly unopen and their adherance to a quo they didn't design themselves is rediculous. Some moron like me 3000 years ago in Arabia probably crafted the 2 + 2 = 4 quo, the adherance to it does not impress the Arabic thinkers of the time by protesting that \"window\" is too deviant, 4 was deviant once."
    ]
   },
   {
    "sec": "C",
    "paras": [
     "Prior to year 3, yes; after year 3, no. I was a teachers pet until year 4, after year 3 I seem to have deviated into being a deviant more than a teachers pet."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "H/I-8",
  "question": "Do you often find it difficult to await your turn? And how was that during childhood?",
  "adult": [
   {
    "t": "Difficulty waiting in a queue, jumping the queue",
    "c": true
   },
   {
    "t": "Difficulty in patiently waiting in the traffic/traffic jams",
    "c": true
   },
   {
    "t": "Difficulty waiting your turn during conversations",
    "c": true
   },
   {
    "t": "Being impatient",
    "c": true
   },
   {
    "t": "Quickly starting relationships/jobs, or ending/leaving these because of impatience",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Difficulty waiting turn in group activities",
    "c": true
   },
   {
    "t": "Difficulty waiting turn in the classroom",
    "c": false
   },
   {
    "t": "Always being the first to talk or act",
    "c": true
   },
   {
    "t": "Becomes quickly impatient",
    "c": true
   },
   {
    "t": "Crosses the road without looking",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "Its not the queue itself often, its the precognition of the queue, the anticipitory boredom rather than in the moment. If I get stuck in traffic once in a while I don't care, if its daily, it becomes problematic for me. I can distract myself for a day, lul myself into imagination, but... I repetitiveness gives me intense frustration (when trying to word exactly what it is, I couldnt, I'll think on it cause my head filled with 30 variables)."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "criterion",
  "code": "H/I-9",
  "question": "Do you often interrupt the activities of others, or intrude on others? And how was that during childhood?",
  "adult": [
   {
    "t": "Being quick to interfere with others",
    "c": false
   },
   {
    "t": "Interrupts others",
    "c": true
   },
   {
    "t": "Disturbes other people’s activities without being asked",
    "c": false
   },
   {
    "t": "Comments from others about interference",
    "c": false
   },
   {
    "t": "Difficulty respecting the boundaries of others",
    "c": false
   },
   {
    "t": "Having an opinion about everything and immediately expressing this",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Impinges on the games of others",
    "c": false
   },
   {
    "t": "Interrupts the conversations of others",
    "c": true
   },
   {
    "t": "Reacts to everything",
    "c": false
   },
   {
    "t": "Unable to wait",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "Am actually an avid people watcher beccause I want new novel information - so I want them to do something, so I can observe it - more often than I want to outshine them. I don't care about my own Self, low safety, etc, often I am just far more interested in the collection of data. It is hard if you perceive them to make a fault before they make a fault - but I still often don't intervene because every human, myself included, can categorically see all their own faults. I don't care about physical reality enough to take over their lives. I like to watch and see how things play out - so I can mimic their knowledge if I see fit. Very often people have a smarter way of solving a problem they create than I would have comprehended. I have a \"break it and fix it\" mind myself, a highly systematic brain, I like to see other peoples fixing systems too."
    ]
   }
  ],
  "notes": []
 },
 {
  "type": "part",
  "title": "Part 3 · Impairment across life domains"
 },
 {
  "type": "domain",
  "title": "Work and Education",
  "adult": [
   {
    "t": "Did not complete education/training needed for work",
    "c": false
   },
   {
    "t": "Work below level of education",
    "c": true
   },
   {
    "t": "Tire quickly of a workplace",
    "c": true
   },
   {
    "t": "Pattern of many short-lasting jobs",
    "c": true
   },
   {
    "t": "Difficulty with administrative work/planning",
    "c": false
   },
   {
    "t": "Not achieving promotions",
    "c": true
   },
   {
    "t": "Under-performing at work",
    "c": false
   },
   {
    "t": "Left work following arguments or dismissal",
    "c": true
   },
   {
    "t": "Sickness benefits/disability benefit as a result of symptoms",
    "c": false
   },
   {
    "t": "Limited impairment through compensation of high IQ",
    "c": true
   },
   {
    "t": "Limited impairment through compensation of external structure",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Lower educational level than expected based on IQ",
    "c": false
   },
   {
    "t": "Staying back (repeating classes) as a result of concentration problems",
    "c": false
   },
   {
    "t": "Education not completed / rejected from school",
    "c": false
   },
   {
    "t": "Took much longer to complete education than usual",
    "c": true
   },
   {
    "t": "Achieved education suited to IQ with a lot of effort",
    "c": false
   },
   {
    "t": "Difficulty doing homework",
    "c": true
   },
   {
    "t": "Followed special education on account of symptoms",
    "c": false
   },
   {
    "t": "Comments from teachers about behaviour or concentration",
    "c": true
   },
   {
    "t": "Limited impairment through compensation of high IQ",
    "c": true
   },
   {
    "t": "Limited impairment through compensation of external structure",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "C",
    "paras": [
     "I have a few uni degrees and diplomas and TAFE certificates and such. I routinely, at uni, would forget an assessment due date, and have to resit the entire unit. Or misread a major question in an assessment, etc and had to resubmit or failed due to that."
    ]
   }
  ],
  "childImages": {
   "caption": "a few Science school report comments from Year 7 as brief examples",
   "src": [
    "images/School_Report.png",
    "images/School_Report_2.png",
    "images/School_Report_3.png"
   ]
  }
 },
 {
  "type": "domain",
  "title": "Relationship and Family",
  "adult": [
   {
    "t": "Tire quickly of relationships",
    "c": false
   },
   {
    "t": "Impulsively commencing/ending relationships",
    "c": false
   },
   {
    "t": "Unequal partner relationship owing to symptoms",
    "c": false
   },
   {
    "t": "Relationship problems, lots of arguments, lack of intimacy",
    "c": false
   },
   {
    "t": "Divorced owing to symptoms",
    "c": false
   },
   {
    "t": "Problems with sexuality as a result of symptoms",
    "c": false
   },
   {
    "t": "Problems with upbringing as a result of symptoms",
    "c": true
   },
   {
    "t": "Difficulty with housekeeping and/or administration",
    "c": false
   },
   {
    "t": "Financial problems or gambling",
    "c": true
   },
   {
    "t": "Not daring to start a relationship",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Frequent arguments with brothers or sisters",
    "c": false
   },
   {
    "t": "Frequent punishment or hiding",
    "c": true
   },
   {
    "t": "Little contact with family on account of conflicts",
    "c": false
   },
   {
    "t": "Required structure from parents for a longer period than would normally be the case",
    "c": false
   }
  ],
  "comments": []
 },
 {
  "type": "domain",
  "title": "Social Contacts",
  "adult": [
   {
    "t": "Tire quickly of social contacts",
    "c": true
   },
   {
    "t": "Difficulty maintaining social contacts",
    "c": false
   },
   {
    "t": "Conflicts as a result of communication problems",
    "c": false
   },
   {
    "t": "Difficulty initiating social contacts",
    "c": false
   },
   {
    "t": "Low self-assertiveness as a result of negative experiences",
    "c": false
   },
   {
    "t": "Not being attentive (i.e. forget to send a card/empathising/phoning, etc)",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Difficulty maintaining social contacts",
    "c": false
   },
   {
    "t": "Conflicts as a result of communication problems",
    "c": false
   },
   {
    "t": "Difficulty entering into social contacts",
    "c": false
   },
   {
    "t": "Low self-assertiveness as a result of negative experiences",
    "c": false
   },
   {
    "t": "Few friends",
    "c": false
   },
   {
    "t": "Being teased",
    "c": false
   },
   {
    "t": "Shut out by, or not being allowed, to do things with a group",
    "c": false
   },
   {
    "t": "Being a bully",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "C",
    "paras": [
     "I am super gregarious, people were never my issue.",
     "So assertive in fact that I had about 150 people to my 18th birthday party from multiple social circles (work group, school group, bunch of nerds a few years older, large goth social circle from the city from early online social networking websites, etc).",
     "I feel I burnt out on sociability quite young and so get bored at the repetitiveness of social activities now due to boredom, my brain thinks, \"I could be at home coding, watching a podcast, playing a game, having sex, etc\"."
    ]
   }
  ]
 },
 {
  "type": "domain",
  "title": "Free time and Hobbies",
  "adult": [
   {
    "t": "Unable to relax properly during free time",
    "c": false
   },
   {
    "t": "Having to play lots of sports in order to relax",
    "c": false
   },
   {
    "t": "Injuries as a result of excessive sport",
    "c": false
   },
   {
    "t": "Unable to finish a book or watch a film all the way through",
    "c": false
   },
   {
    "t": "Being continually busy and therefore becoming overtired",
    "c": false
   },
   {
    "t": "Tire quickly of hobbies",
    "c": false
   },
   {
    "t": "Accidents/loss of driving licence as a result of reckless driving behaviour",
    "c": true
   },
   {
    "t": "Sensation seeking and/or taking too many risks",
    "c": true
   },
   {
    "t": "Contact with the police/the courts",
    "c": false
   },
   {
    "t": "Binge eating",
    "c": true
   }
  ],
  "child": [
   {
    "t": "Unable to relax properly during free time",
    "c": false
   },
   {
    "t": "Having to play lots of sport to be able to relax",
    "c": true
   },
   {
    "t": "Injuries as a result of excessive sport",
    "c": false
   },
   {
    "t": "Unable to finish a book or watch a film all the way through",
    "c": false
   },
   {
    "t": "Being continually busy and therefore becoming overtired",
    "c": false
   },
   {
    "t": "Tired quickly of hobbies",
    "c": false
   },
   {
    "t": "Sensation seeking and/or taking too many risks",
    "c": false
   },
   {
    "t": "Contact with the police/courts",
    "c": false
   },
   {
    "t": "Increased number of accidents",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "This is actually hard, mostly all these things happened before the age of 19, and resolved by 25ish when I forced myself into a more introverted existance. I lost my licence 3 times during my Ps.",
     "In terms of relaxation, I can relax very well, it's that there is a lack of orderliness to when to relax. Place me in a museum and I am the calmest bird to have ever flown - but when there is stimuli around me, I buzz."
    ],
    "childImages": {
     "caption": "Licence history (as of 2025):",
     "src": [
      "images/Licence_History_2025.png"
     ]
    }
   },
   {
    "sec": "C",
    "paras": [
     "I used to play a lot of sport as a kid - soccer/football, cricket, basketball, horse-riding, rollar-skating, etc - my best female friend at school wanted to go professional in basketball so I'd play that with her a lot.",
     "In terms of things I didn't answer - I read harry potter 3, 18 times in year 6, I'd sit up the back of class and just read all day. I dug through as much as I could get my hands on from an approx 50-book young adult series and such prior to that (reference <a href=https://www.goodreads.com/series/64593-pony-pals>1</a> & <a href=https://www.goodreads.com/series/67646-pony-pals-super-specials>2</a>). I was always an avid reader. My issue as an adult is compartmentalising my distractions. I lived in a van for a few weeks when I was 25, I read I think 10 books in two weeks if I recall. I just plowed through them. I love to read. But I find it hard to justify when I could be doing something that \"lasts\" forever. Which is never the case but anyway. Like I can make a website thats useful for other people - or, I can do something like read and then share that information to others - but the former is easier to stabilise results for. So I try audiobooks, but i listen to them, say like an hour or two, once a fortnight, it is infrequent but I do always aim to finish them and often I eventually do. Right now I’m like 8 hours into <https://www.audible.com.au/pd/The-Idiot-Audiobook/B01N3ATK5K>Dostoyevsky</a> and am an hour into <https://www.audible.com.au/pd/A-Billion-Years-of-Sex-Differences-Audiobook/B0FYR4BM3Q>A Billion Years of Sex Differences: How Evolution Shaped the Minds of Men and Women</a>… the last few books I listened to were <https://www.audible.com.au/pd/Essays-in-Love-Audiobook/B00FG9BJNC>Essays in Love</a> a fiction prose about love upon recommendation from <https://www.youtube.com/@CosmicSkeptic>Alex O’Connor</a>, as I’d listened to podcasts from the author and genuinely think hes a great philosopher and also <https://www.audible.com.au/pd/Troubled-Audiobook/B0CJ3DF83W>Troubled</a> by <https://www.robkhenderson.com/>Rob Henderson</a>."
    ]
   }
  ]
 },
 {
  "type": "domain",
  "title": "Self-confidence and Self-image",
  "adult": [
   {
    "t": "Uncertainty through negative comments of others",
    "c": false
   },
   {
    "t": "Negative self-image due to experiences of failure",
    "c": false
   },
   {
    "t": "Fear of failure in terms of starting new things",
    "c": false
   },
   {
    "t": "Excessive intense reaction to criticism",
    "c": false
   },
   {
    "t": "Perfectionism",
    "c": true
   },
   {
    "t": "Distressed by the symptoms of ADHD",
    "c": false
   }
  ],
  "child": [
   {
    "t": "Uncertainty through negative comments of others",
    "c": false
   },
   {
    "t": "Negative self-image due to experiences of failure",
    "c": false
   },
   {
    "t": "Fear of failure in terms of starting new things",
    "c": false
   },
   {
    "t": "Excessive intense reaction to criticism",
    "c": false
   },
   {
    "t": "Perfectionism",
    "c": false
   }
  ],
  "comments": [
   {
    "sec": "A",
    "paras": [
     "My perfectionism is more about my creations than my physical self. I try to avoid stress by keeping calm in most situations - control my internal fury, and eat well (vegetarian for 11 years) to maintain my physical appearance. I never get beyond 15kgs overweight (there is a mental threshold I believe in how the general Other interacts with you, 5kgs over makes certain shallow people avoid you and too fat makes the general caucus of people avoid you, so I try and not go over this threshold, for me this is <50kg and >70kg) - but I don't focus on it as a daily interest. It's a passive thing and generally I don't care at all about my physical appearance because people have proven to me that I can generally speaking acquire the humans I want to associate with as long as I don't break this threshold. I will show up to somewhere in a black hoodie with my hair not done and no makeup without issue.",
     "But, in terms of perfectionism as a whole I have two distinct modes - I give up on perfectionism from the start or I over embellish into it. I will do 200 iterations of a piece of art on Midjourney trying to make the artwork perfect to my standards, for website I will sit and tweak even the slightest little colour or spacing errors and do 300 commits on Github, I will spend fifteen minutes trying to find one word when writing that correctly exemplifies what I am trying to say. I realised when I was young that English is exceptionally bad at things, that I now can explain due to language variability (being an ESL English teacher and trying to learn 5 other languags over the course of my life) - English is a business language, so it's easier for then foreigners to learn (has no gender (even german does, approx 38% do), no politeness system (re, jap kor indo), it's not a tonal languge (thai viet mand etc)) but it struggles differentially to Romance languages in explaining feelings and expressions of the primordial Self. English is of course a Germanic language, so it just struggles to express chaotic emotionality as well as it does stoic verbosity, German's ability in itself to craft new variants of words is fantastic and I enjoy it thoroughly, I dont dislike English but... even when you get into the versions of English that are being taught, International English/Common English is now generally speaking much more common (as there is more second-language speakers of english than first-language speakers and so content is made to span the widest audience of listeners without being conscious sometimes of it, you just innately edit yourself to be more easily understood online), so the words may even exist but they are so far outside of anyone's lexicon that you can't use them for anything pointed towards the Other in discourse in any form. Very complex... language. But yes so I started doing this as a child (I starting writing novellas about 8 in writing my dreams into stories - I had a reoccuring dream as a kid of three wolves chasing me, and also other dreams of things my dog and I would do, and imagining sitting on the roof of somewhere watching something on fire and trying to explain how I felt as a kid, things like this which ended up manifested into the written word over time), but I have the two modes, 'fuck it' and 'obsessivism' - its entirely the same with my interactions with love/men."
    ]
   }
  ]
 }
];
