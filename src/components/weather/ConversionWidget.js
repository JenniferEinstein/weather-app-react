import React from 'react'


//this was originally one of the asides

function ConversionWidget() {



  return (
    <>
    <aside className='conversionWidget'>
    <div>ConversionWidget

    <form id="tempconvform" name="tempconvform">
          <table className="calculation">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="x">Celsius</label>
                </td>
                <td>
                  <input id="x" className="intext" type="text" name="x" required data-form-type="other" />
                </td>
                <td className="degreesC">°C</td>              
              </tr>
              <tr>
                <td />
                <td colSpan={3}>
                  <button className="button" type="button" title="calculate" onclick="OnCalcCelFar()">
                    <span>→</span>
                    Calculate
                  </button>
                  <button className="button" type="reset" title="Reset" onclick>
                    <span>↺</span>
                    Reset
                  </button> 
                  <button className="button" type="button" title="calculate" onclick>
                    <span> ⇅ </span>
                    Swap
                  </button>
                </td>
              </tr>
              <tr>
                <td>Fahrenheit</td>
                <td>
                  <input id="y" className="outtext" type="text" readOnly data-form-type="other" />
                </td>
              </tr>
              <tr id="calculation">
                <td>Calculation</td>
                <td>
                  <textarea id="TA" className="outtext" rows={2} defaultValue={""} />
                </td>
                <td />
              </tr>
            </tbody>
          </table>
          </form>
          </div>
          </aside>

</>
    );

}

export default ConversionWidget
