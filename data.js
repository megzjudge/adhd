// Reference data for the DIVA-5 self-check (as reported by the adhdprep.com screener).
// The self-check sums 18 DSM items (Never=0 … Very Often=4) into a total /72,
// with a clinical threshold of 24, and reports three category averages (0–4).

// ---- Site owner's own result, shown as the default "My Result" comparison ----
const MY_RESULT = {
  label: 'My Result',
  total: 53,          // /72
  inattention: 2.89,  // average across the 9 inattention items (0–4)
  hyperactivity: 2.40,// average across the 5 hyperactivity items (0–4)
  impulsivity: 3.75,  // average across the 4 impulsivity items (0–4)
  color: '#8b9a6b',
};

const YOUR_RESULT_COLOR = '#4a6fa5';

// ---- Self-check scoring ----
const THRESHOLDS = {
  totalMax: 72,
  clinicalThreshold: 24,   // total >= 24 = above threshold on the self-check
  categoryMax: 4,          // category averages run 0–4
};

// ---- Category structure (how the 18 items split) ----
const CATEGORIES = [
  { key: 'inattention',  name: 'Inattention',   items: 9, note: 'Items 1–9: attention, focus, organisation, forgetfulness.' },
  { key: 'hyperactivity',name: 'Hyperactivity', items: 5, note: 'Items 10–14: restlessness, fidgeting, being "on the go".' },
  { key: 'impulsivity',  name: 'Impulsivity',   items: 4, note: 'Items 15–18: blurting, interrupting, waiting your turn.' },
];

// ---- Owner's 18 self-check responses (for the walkthrough page) ----
const RESPONSE_SCALE = ['Never', 'Rarely', 'Sometimes', 'Often', 'Very Often'];
const MY_RESPONSES = [
  { cat: 'inattention',  q: 'Often fails to give close attention to details / makes careless mistakes', a: 'Often' },
  { cat: 'inattention',  q: 'Often has difficulty sustaining attention in tasks or activities', a: 'Sometimes' },
  { cat: 'inattention',  q: 'Often does not seem to listen when spoken to directly', a: 'Sometimes' },
  { cat: 'inattention',  q: 'Often does not follow through on instructions / fails to finish tasks', a: 'Very Often' },
  { cat: 'inattention',  q: 'Often has difficulty organising tasks and activities', a: 'Very Often' },
  { cat: 'inattention',  q: 'Often avoids or is reluctant to engage in sustained mental effort', a: 'Rarely' },
  { cat: 'inattention',  q: 'Often loses things necessary for tasks or activities', a: 'Very Often' },
  { cat: 'inattention',  q: 'Often easily distracted by extraneous stimuli', a: 'Often' },
  { cat: 'inattention',  q: 'Often forgetful in daily activities', a: 'Often' },
  { cat: 'hyperactivity',q: 'Often fidgets with or taps hands or feet, or squirms in seat', a: 'Sometimes' },
  { cat: 'hyperactivity',q: 'Often leaves seat when remaining seated is expected', a: 'Sometimes' },
  { cat: 'hyperactivity',q: 'Often feels restless', a: 'Often' },
  { cat: 'hyperactivity',q: 'Often has difficulty engaging in leisure activities quietly', a: 'Rarely' },
  { cat: 'hyperactivity',q: 'Often "on the go", acting as if "driven by a motor"', a: 'Very Often' },
  { cat: 'impulsivity',  q: 'Often talks excessively', a: 'Very Often' },
  { cat: 'impulsivity',  q: 'Often blurts out an answer before a question has been completed', a: 'Very Often' },
  { cat: 'impulsivity',  q: 'Often has difficulty waiting your turn', a: 'Very Often' },
  { cat: 'impulsivity',  q: 'Often interrupts or intrudes on others', a: 'Often' },
];
