import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import NIDCard from './NIDCard';
import Button from '@/components/ui/Button';
import DownloadNIDCardView from './downloadNIDCardView';

const handleDownloadPDF = async (nidData) => {
    const element = document.getElementById('nidCard');  
    const canvas = await html2canvas(element, {
        useCORS: true,  
        allowTaint: false  
    });

    const imgData = canvas.toDataURL('image/png');  

    const pdf = new jsPDF({
        orientation: 'landscape',  
        unit: 'px',  
        format: [canvas.width, canvas.height],  
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);

    pdf.save(`nid_${nidData.nid_number}.pdf`);
};



const NIDDownload = ({ nidData }) => {
    return (
        <div>
            <NIDCard  nidData={nidData} />
            <DownloadNIDCardView  nidData={nidData} />
            <div className="ltr:text-center rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
                        <Button
                           onClick={() => handleDownloadPDF(nidData)}
                            text="Download NID PDF"
                            className="btn-dark"
                        />
                    </div>
        </div>
    );
};

export default NIDDownload;
