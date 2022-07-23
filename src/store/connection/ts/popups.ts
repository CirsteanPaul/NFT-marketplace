import Swal from "sweetalert2";

export const noMetamaskPopup =async () =>{
    const result = await Swal.fire({  
        title: 'Where is your metamask?',  
        text: 'Do you want to download metamask?',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonColor: '#3085d6',  
        cancelButtonColor: '#d33',  
        confirmButtonText: 'Yes!',
        cancelButtonText: "Later.."
      });
      if(result.isConfirmed) window.open("https://metamask.io/download/", "_blank")
      
}
export const connectSuccesfullPopup = () =>{
    Swal.fire({  
        title: 'Success',  
        icon: 'success',  
        text: 'Your metamask is connected!',  
    });
}
export const somethingWentWrongPopup = (networkName: string) =>{
    Swal.fire({  
        title: 'Something went wrong',  
        icon: 'error',  
        text: `We couldn't connect to ${networkName} with your wallet`,  
    });
}