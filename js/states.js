const states = [
  { state: 'Arizona', abbrv: 'AZ'},
  { state: 'Alabama', abbrv: 'AL'},
  { state: 'Alaska', abbrv: 'AK'},
  { state: 'Arizona', abbrv: 'AZ'},
  { state: 'Arkansas', abbrv: 'AR'},
  { state: 'California', abbrv: 'CA'},
  { state: 'Colorado', abbrv: 'CO'},
  { state: 'Connecticut', abbrv: 'CT'},
  { state: 'Delaware', abbrv: 'DE'},
  { state: 'Florida', abbrv: 'FL'},
  { state: 'Georgia', abbrv: 'GA'},
  { state: 'Hawaii', abbrv: 'HI'},
  { state: 'Idaho', abbrv: 'ID'},
  { state: 'Illinois', abbrv: 'IL'},
  { state: 'Indiana', abbrv: 'IN'},
  { state: 'Iowa', abbrv: 'IA'},
  { state: 'Kansas', abbrv: 'KS'},
  { state: 'Kentucky', abbrv: 'KY'},
  { state: 'Kentucky', abbrv: 'KY'},
  { state: 'Louisiana', abbrv: 'LA'},
  { state: 'Maine', abbrv: 'ME'},
  { state: 'Maryland', abbrv: 'MD'},
  { state: 'Massachusetts', abbrv: 'MA'},
  { state: 'Michigan', abbrv: 'MI'},
  { state: 'Minnesota', abbrv: 'MN'},
  { state: 'Mississippi', abbrv: 'MS'},
  { state: 'Missouri', abbrv: 'MO'},
  { state: 'Montana', abbrv: 'MT'},
  { state: 'Nebraska', abbrv: 'NE'},
  { state: 'Nevada', abbrv: 'NV'},
  { state: 'New Hampshire', abbrv: 'NH'},
  { state: 'New Jersey', abbrv: 'NJ'},
  { state: 'New Mexico', abbrv: 'NM'},
  { state: 'New York', abbrv: 'NY'},
  { state: 'North Carolina', abbrv: 'NC'},
  { state: 'North Dakota', abbrv: 'ND'},
  { state: 'Ohio', abbrv: 'OH'},
  { state: 'Oklahoma', abbrv: 'OK'},
  { state: 'Oregon', abbrv: 'OR'},
  { state: 'Pennsylvania', abbrv: 'PA'},
  { state: 'Rhode Island', abbrv: 'RI'},
  { state: 'South Carolina', abbrv: 'SC'},
  { state: 'South Dakota', abbrv: 'SD'},
  { state: 'Tennessee', abbrv: 'TN'},
  { state: 'Texas', abbrv: 'TX'},
  { state: 'Utah', abbrv: 'UT'},
  { state: 'Vermont', abbrv: 'VT'},
  { state: 'Virginia', abbrv: 'VA'},
  { state: 'Washington', abbrv: 'WA'},
  { state: 'West Virginia', abbrv: 'WV'},
  { state: 'Wisconsin', abbrv: 'WI'},
  { state: 'Wyoming', abbrv: 'WY'}
];
console.log(states[0].state)

abbrvState = state => {
  for(key of states){
    if(key.state.toLowerCase() === state.toLowerCase()){
      return key.abbrv;
    }
  }
};
