// module.exports={
//     lintOnSave:true,
//     devServer:{
//         proxy:{
//             '/api':{
//                 target:'https://easy-mock.com/mock/5d462c15d98b9f603f8aeb06/bookAPI',
//                 changeOrigin:true,
//                 secure:true,
//                 pathRewrite: {
//                     '^/api': '/'          
//                 }
//             }
//         }

//         // proxy:{
//         //     '/api':{
//         //         target:'http://223.111.8.82:80',
//         //         changeOrigin:true,
//         //         secure:false,
//         //         pathRewrite: {
//         //             '^/api': '/'          
//         //         }
//         //     }
//         // }
//     }
// }

module.exports={
    lintOnSave:true,
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:8003',
                changeOrigin:true,
                secure:true
            }
        }
    }
}