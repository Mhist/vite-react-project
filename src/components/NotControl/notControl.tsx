import { useRef } from "react";


const NotControl = () => {
    let value = 'xmzs';
    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange = (e: any) => {
        console.log(e.target.value);
        console.log(inputRef.current?.value);
    }
    return (
        <>
        {/* 当input type=‘file’的时候、是非受控组件、不能强行转为受控组件   https://www.bilibili.com/video/BV1mcpPeMETt?spm_id_from=333.788.videopod.episodes&vd_source=d5111269b016ca70626af94fe0b41736&p=24*/}
            <input onChange={handleChange} ref={inputRef} type="text" defaultValue={value} />
        </>
    );
};

export default NotControl;