import React, { useState } from 'react';
import './op_maker_form.css';

const Op_maker_form = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
  };

  // Function to check if a field matches the regex pattern
  const isFieldMatching = (fieldName) => {
    const mystring =
      "P IND aR ; ‘ YJ / INDIANX5760 . 687    CHANDRASEKAR ohare    feat EH AH / Given Name(s) se ae    NANDISH ae os    TRA /Date of Birth fer /Sex Wi eeeesiepn    06/05/2002 . eS    COIMBATORE, TAMIL NADU i.  WR BR a IF / Place of tssue ime  MA BR /Date of sve sania AY BRI / Date of Expiry  24/04/2023 23/04/2033  RS<NAND I SH<<<<<<<<<<<<<<<<<<  1942371065272400923<76  r";
    const myarray = mystring.split(" ");

    function removeSpecialCharactersFromArray(arr) {
      const cleanedArray = arr.map((str) => {
        // Use a regular expression to match special characters at the beginning and end
        // of each string and replace them with an empty string
        return str.replace(/[^a-zA-Z0-9]+/g, '');
      });

      return cleanedArray;
    }
    const newArray = removeSpecialCharactersFromArray(myarray);
    console.log(newArray);
    const filteredArray = newArray.filter((str) => str !== "");
    console.log(filteredArray)
    const regexPattern = filteredArray.map((item) => new RegExp(item));
    console.log(regexPattern);

    // Sample field values, you can replace them with your own values
    const fieldValues = {
      fullname: 'Nandish Chandrasekar',
      gender: 'Female',
      dob: '06/05/2002',
      // ... Add more field values here
    };

    const fieldValue = fieldValues[fieldName];

    // Check if the field value matches the regex pattern
    for (const pattern of regexPattern) {
      if (pattern.test(fieldValue)) {
        return 'matching-field-green';
      }
    }

    return 'matching-field-red';
  };

  return (
    <div>
      <div className="contop">
        <div className="row">
          <div className="col-md-6 col-sm-12 mmain">
            <div className="pdf shadow-lg">
              <h2 className="docu">Attached Docs</h2>
              <object
                className="pd"
                data="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
              ></object>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="cont">
              <div className="containe shadow-lg bg-white rounded">
                <h2 className="applicant">Applicant details</h2>
                <div className="row r1">
                  <div className="col-6">
                    <div className="row p-1 mb-1">
                      <div className="col-sm-4 text-start st">
                        <label className="ll" htmlFor="fullname">
                          Full name:
                        </label>
                      </div>
                      <div className="col-sm-6 text-sm-end">
                        <input
                          type="text"
                          id="fullname"
                          className={isFieldMatching('fullname')}
                          name="fullname"
                          value="Nandish Chandrasekar"
                          onChange={handleInputChange}
                        />
                      </div>
                      {/* Repeat similar input fields for other attributes */}
                      <div className="col-sm-4 text-start st lef">
                        <label className="ll" htmlFor="gender">
                          Gender:
                        </label>
                      </div>
                      <div className="col-sm-6 text-sm-end">
                        <input
                          type="text"
                          id="gender"
                          className={isFieldMatching('gender')}
                          name="gender"
                          value="Male"
                          onChange={handleInputChange}
                        />
                      </div>
                      {/* More input fields */}
                      <div className="col-sm-4 text-start st lef">
                        <label className="ll" htmlFor="dob">
                          DOB:
                        </label>
                      </div>
                      <div className="col-sm-6 text-sm-end">
                        <input
                          type="text"
                          id="dob"
                          className={isFieldMatching('dob')}
                          name="dob"
                          value="06/05/2002"
                          onChange={handleInputChange}
                        />
                      </div>
                      {/* Repeat similar input fields */}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row p-1 mb-1">
                      {/* More input fields */}
                    </div>
                  </div>
                </div>
                <hr className="hrtag" />
                <div className="row r2">
                  <div className="col-6">
                    <div className="row p-1 mb-1">
                      {/* More input fields */}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row p-1 mb-1">
                      {/* More input fields */}
                    </div>
                  </div>
                </div>
                <hr className="hrtag" />
                <div className="row r3">
                  <div className="col-6">
                    <div className="row p-1 mb-1">
                      {/* More input fields */}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row p-1 mb-1">
                      {/* More input fields */}
                    </div>
                  </div>
                </div>
                <hr className="hrtag" />
                <div className="row r4">
                  <div className="col-6">
                    <div className="row p-1 mb-1">
                      {/* More input fields */}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row p-1 mb-1">
                      {/* More input fields */}
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 col-3 mx-auto">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-toggle="button"
                  >
                    Forward
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Op_maker_form;
