export function anatomyScene({compact=false}={}) {
  return `<figure class="anatomy-scene ${compact?'compact':''}">
    <div class="anatomy-halo" aria-hidden="true"></div>
    <div class="body-model" data-anatomy><p class="anatomy-status" role="status">Loading anatomy illustration…</p></div>
    <span class="body-tag tag-one"><i></i>Shared care plan</span>
    <span class="body-tag tag-two"><i></i>Patient updates</span>
    <span class="body-tag tag-three"><i></i>Doctor review</span>
    <div class="anatomy-base" aria-hidden="true"></div>
    <div class="body-controls" aria-label="Anatomy illustration view"><button type="button" data-body-view="front" aria-pressed="true" disabled>Front</button><button type="button" data-body-view="back" aria-pressed="false" disabled>Back</button></div>
    <figcaption>Illustration only · Not patient anatomy<br><a href="/assets/ANATOMY-CREDITS.html" target="_blank" rel="noopener" aria-label="Anatomy artwork credits, opens a new tab">Artwork credits ↗</a></figcaption>
  </figure>`;
}
export function dnaCard({done=0,total=0}={}) {
  return `<section class="card dna-card"><div class="dna-copy"><div class="eyebrow">The shared plan</div><h2>Every step,<br>connected.</h2><div class="dna-number">${done}<span> / ${total}</span></div><p class="label">Recorded complete</p><p class="muted micro">Active approved tasks.<br>Patient-reported progress.</p></div><img src="/assets/dna-helix.png" alt="Decorative silver DNA double helix" width="1024" height="1536"><span class="dna-caption">Illustration only</span></section>`;
}
export function dnaReview() {
  return `<figure class="dna-review"><div class="eyebrow">A shared view of care</div><img src="/assets/dna-helix.png" alt="Decorative silver DNA double helix" width="1024" height="1536"><div class="dna-review-label dr-one"><span class="dot"></span>Approve the plan</div><div class="dna-review-label dr-two"><span class="dot"></span>Share progress</div><div class="dna-review-label dr-three"><span class="dot"></span>Review next steps</div><figcaption>Decorative illustration · No genetic analysis</figcaption></figure>`;
}

