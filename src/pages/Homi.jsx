import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";



const HomePage = () => {


  const backgroundImageUrl = 'url("https://i.ibb.co/KNk7DSC/garden-sunrise-lawn-1.jpg")'; // Replace with the actual image path

  return (

    <div><h1 style={{
      textAlign: 'center',
      padding: 30,
      fontSize: 50,
      color: 'darkorange',
      fontWeight: 'bold',
     
      


    }}>मथुरा  वृन्दावन  हासानन्द  गौचर  भूमि  ट्रस्ट</h1>

      <div >


        <header>
          <section className="img-fluid"
            style={{
              backgroundImage: backgroundImageUrl,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",

              display: "flex",
              flexDirection: 'row',

            }}>



            <div className="row">
              <div className="col-lg-8 header-left-side d-flex  flex-column align-items-start ">
                <img
                  src="./image/pmn.jpg" style={{
                    position: "absolute",
                    marginTop: 45,
                    top: 0,
                    left: 0,
                    maxHeight: 130,

                  }}

                />
                <img
                  src="./image/images.jpg" style={{
                    position: "absolute",
                    marginTop: 45,
                    top: 0,
                    right: 0,
                    maxHeight: 130,
                  }}

                />
                <p  style={{
                  marginTop: 20,
                  marginLeft: 25,
                  fontSize: 50,
                  paddingLeft: 25,
                  fontWeight: 'bold',
                  color: 'darkorange'
                }}
                >
                  गौ ग्राम वृक्षारोपण
                </p>
                {/* <p style={{
                  marginTop: 40,
                  marginLeft: 10,
                  fontSize: 20,
                  paddingLeft: 25,
                  color: 'lightgrey',
                
                }}>
                  पश्यैतान् महाभागान् पराबैंकान्तजीवितान्।<br/>
                  वातवर्षातपहिमान् सहन्तरे वारयन्ति नः॥
                  <br />
<p></p>

                  अहो एषां वरं जन्म सर्वप्राण्युपजीवनम्।<br/>
                  सुजनस्यैव येषां वै विमुखा यान्ति नार्थिनः॥
                </p> */}
                <p style={{
                  marginTop: 20,
                  marginLeft: 25,
                  fontSize: 22,
                  paddingLeft: 25,
                  color: 'darkorange',
                  lineHeight: '1.5', // Added for better line spacing
                }}>
                  पश्यैतान् महाभागान् पराबैंकान्तजीवितान्।<br />
                  वातवर्षातपहिमान् सहन्तरे वारयन्ति नः॥<br /><br />

                  अहो एषां वरं जन्म सर्वप्राण्युपजीवनम्।<br />
                  सुजनस्यैव येषां वै विमुखा यान्ति नार्थिनः॥
                </p>
                <p style={{
                  marginTop: 20,
                  marginLeft: 25,
                  fontSize: 20,
                  paddingLeft: 25,
                  color: 'white',

                }}>
                  भगवान योगेश्वर श्रीकृष्ण का बचपन "गौ माता के बीच ही बीता,<br /> इसीलिए उन्हें "गोपाल" नाम
                  से भी जाना जाता है। ऐसी महान<br /> पुण्य धरा पर भारत रत्न महामना पं० श्री मदन मोहन मालवीय <br />
                  जी ने बृज क्षेत्र में गौ पालन, संवर्धन, संरक्षण एवं गोचर भूमि की<br /> सुरक्षा
                  हेतु पूज्य महात्मा हासानन्द जी की प्रेरणा से मथुरा  वृन्दावन  हासानन्द  गौचर  भूमि  ट्रस्ट की स्थापना की गयी|
                </p>



              </div>

              <div className="col-lg-4 header-right-side d-flex justify-content-center 
         align-items-center main-herosection-images" >
                <img
                  src="./image/cow ppt.jpg" style={{
                    width: 700,
                    height: 400,
                    marginLeft: '270px',
                    marginTop: -100
                  }}
                />

              </div>
            </div>
          </section>
        </header>
      </div>
    </div>


  );
};
export default HomePage;

