export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p>
        <ul>
        <li><strong>No Age Limits</strong></li>   
        <li><strong>No Maximum Coverage Limits</strong></li>
        <li><strong>A-Rated Insurers</strong></li>
        <li><strong>Same Pricing Nationwide</strong></li>
      </p>
      <h2>An affordable national health plan that includes all of the following</h2>
      <div class="table">
  <div class="table-row">
    <div class="table-cell">4 Million PCHS Physicians and Hospitals</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Telemedicine 24 Hrs 365 Days Board Certified Docs No-Copay</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Quest Labs -Any Test No Copay</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Grow Therapy – Mental Health In Office and Virtual - $30 Copay</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Lowest Cost RX with Drexi</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Legal Defense for Patients from Excess Bills – No Copay</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Dental, Vision, Hearing, DME 50-70% off</div>
  </div>
  <div class="table-row">
    <div class="table-cell">Roadside Assistance</div>
  </div>
</div>

    </>
  );
}
