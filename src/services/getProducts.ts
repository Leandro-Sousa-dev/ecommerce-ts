export const getProducts = async () => {
    const data = await fetch('http://localhost:3333/products')
    return await data.json()
}

export const postSize = async (data: string) => {
    const url = 'http://localhost:3333/sizes'

    await fetch(
        url
        , {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
}