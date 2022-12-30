function longDate(strDate){
  
    const { groups: { year, month, day } } = strDate.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    
    return `${day} de ${monthNames[month-1].toLowerCase()} de ${year}`;    
}


function shortDate(strDate){
  
    const { groups: { year, month, day } } = strDate.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
        
    return `${day}/${month}/${year}`;    
}

export {longDate, shortDate};