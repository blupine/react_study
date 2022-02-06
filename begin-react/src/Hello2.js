import React from 'react';

function Hello2({color, name, isSpecial}){
    return <div style={{color}}>
        {isSpecial ? <b>*</b> : null}
        {isSpecial && <b>*</b>}
        안녕하세요. {name}
        </div>
}

export default Hello2;