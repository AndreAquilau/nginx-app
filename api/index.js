module.exports  = () => {
    const data = {
        produtos: [],
    };

   let date = Date.now();

    for(let i = 0; i < 100; i++) {
        
        data.produtos.push({
            nome: 'Chocolate',
            tipo: 'Saída',
            quantidade: -i + 100, 
            data: new Date(date + (i * 100000)).toISOString(),
        });
    }

    return data;
}