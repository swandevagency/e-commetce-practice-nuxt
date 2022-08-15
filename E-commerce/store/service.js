export const state = () => ({
    products: [],
    categories: []
});

export const mutations = {
    
    setHotOffer: (state, products) => (state.products = products),

    setIntro: (state, categories) => (state.categories = categories)
}

export const actions = {
    async getHotOffer({commit}, {axios}) {
        try {
            const url = 'http://localhost:1337/api/products?populate=*';
            const res = await axios.get(url);
            console.log(res.data.data);
            commit('setHotOffer', res.data.data)
        } catch (error) {
            throw error;
        }
    },

    async getIntro({commit}, {axios}) {
        try{
            const url = 'http://localhost:1337/api/digicategories?populate=*';
            const res = await axios.get(url);
            commit('setIntro', res.data.data)
        } catch(error){
            throw error;
        }
    }
}