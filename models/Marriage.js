const mongoose = require('mongoose');
const validator = require('validator');

const marriageSchema = new mongoose.Schema({
  // Start and end time for reference
  process_start_time: {
    type: Date,
    default: Date.now(),
  },
  process_end_time: Date,
  // Marriage status, could be: SUCCESS, FAILED, PENDING etc
  marriage_status: {
    type: String,
    default: 'PENDING',
  },

  // Step 1 information
  // what type of document is this? voter_ID, school certificate, or birth certificat?
  husband_document_type: String,
  wife_document_type: String,

  husband_document_number: String,
  wife_document_number: String,

  // Check step 1 validity: don't let them pass without this validity:
  husband_age_verified: Boolean,
  wife_age_verified: Boolean,

  // We will get this information from the API verification
  husband_age: Number,
  wife_age: Number,

  // Step 2 Marriage Type
  // Regular, Many, Widowed, Divorced:
  // REGULAR, MANY, WIDOWED, DIVORCED
  husband_marriage_type: {
    type: String,
    default: 'REGULAR',
  },
  wife_marriage_type: {
    type: String,
    default: 'REGULAR',
  },

  // IF MANY:
  husband_permission_from_wife: String,
  wife_permission_from_husband: String,

  husband_chairman_certificate: String,
  wife_chairman_certificate: String,

  // IF WIDOWED
  name_of_civil_sergeon: String,
  husband_death_certificate: String,
  wife_death_certificate: String,

  // IF DIVORCED
  husband_divorce_paper: String,
  wife_divorce_paper: String,

  // General information
  address_of_marriage: String,

  // Husband information
  husband_name: String,
  husband_age: Number,
  husband_date_of_birth: String,
  husband_address: String,
  husband_fathers_name: String,
  husband_mothers_name: String,

  // Wife information
  wife_name: String,
  wife_age: Number,
  wife_date_of_birth: String,
  wife_address: String,
  wife_fathers_name: String,
  wife_mothers_name: String,

  place_of_marriage_address: String,
  // ToDo bride groom ukil name, father, mother name and address

  // Marriage details
  date_of_marriage_discussion: String,
  den_mohor_amount: Number,
  den_mohor_distribution: String,
  den_mohor_paid: Number,
  den_mohor_property_details: String,
  any_special_terms: String,
  husdand_gave_permission_for_divorce: String,
  wifes_right_to_divorce_violated: String,
  husbands_right_to_divorce_violated: String,
  agreement_for_den_mohor_during_marriage: String,

  // ToDo the person (kazi) married them, his name, father, mother name and address
  date_of_marriage_registration: String,
  paid_registration_fees_number: Number,
  paid_registration_fees_words: String,

  //information about lawers_name

  lawers_name: String,
  address_of_wife: String,
  husband_lawer: String,
  address_of_husband: String,
  withness_name_ka: String,
  withness_name_ka_father: String,
  withness_name_ka_mother: String,

  withness_name_kha: String,
  withness_name_kha_father: String,
  withness_name_kha_mother: String,

  the_date_of_fixing_marrage: Date,
  denmohar_amount: Number,

  muyajjol: String,
  M_amojjol: String,

  denmohor_done_or_not: String,
  amount_of_denmohor_paid: String,

  dealing: String,
  special_deal: String,

  kazis_name: String,
  kazis_father_name: String,
});

module.exports = mongoose.model('Marriage', marriageSchema);
