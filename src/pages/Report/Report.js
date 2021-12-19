import React from 'react'
import Button from "@material-tailwind/react/Button";

function Report() {
    return (
        <div class="w-full flex flex-row justify-center">
            <div class="flex items-center mr-10">
            <Button
                color="gray"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="dark"
            >
                Lập báo cáo tổng kết học kỳ
            </Button>  
            </div>
            <div class="flex items-center ml-10">
            <Button
                color="gray"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="dark"
            >
                Lập báo cáo tổng kết môn
            </Button>  
            </div>
        </div>
    )
}

export default Report
