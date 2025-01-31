import React from 'react'
import QR from "../../assets/qr.png"
import { IoMdPhonePortrait } from "react-icons/io";
const AdviceThree = () => {
  return (
    <div className='mt-10 '>
        <h1 className='text-center text-2xl font-bold text-blue-400'>Allergy<span className='text-orange-500'> Advice</span></h1>
        <div className='w-[80%] m-auto mt-20 mb-20'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur hic quos nihil odit, ratione inventore temporibus quo architecto. Molestias dolorem labore officiis iusto debitis. Officiis quibusdam ut aliquam voluptas facere?
            Tempore quidem id fugit quod odit hic dolorem dolor incidunt sint optio debitis ducimus iure illo, modi cupiditate accusantium atque. Molestiae voluptatibus expedita sequi sed incidunt voluptatem natus, doloremque adipisci.
            Similique, quas. Maxime quo adipisci quae accusantium nostrum ab, fuga quam possimus pariatur placeat? Nam excepturi blanditiis sed possimus, distinctio facere, illo magni dolores eveniet consequatur ipsam eum hic obcaecati?
            Eligendi eum accusantium tenetur iure corporis quod eveniet explicabo optio, ipsam molestiae fugit enim quidem sequi, fugiat laudantium totam sapiente quis iusto voluptates laboriosam blanditiis, tempora quisquam culpa. Ab, harum?
            Rem cum temporibus omnis soluta impedit voluptatem laborum officia quas ut quod. Et, laborum? Voluptatem nihil ex ea atque esse qui laborum. Ea eaque fugiat rerum aliquid, dolores repellat minus.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur hic quos nihil odit, ratione inventore temporibus quo architecto. Molestias dolorem labore officiis iusto debitis. Officiis quibusdam ut aliquam voluptas facere?
            Tempore quidem id fugit quod odit hic dolorem dolor incidunt sint optio debitis ducimus iure illo, modi cupiditate accusantium atque. Molestiae voluptatibus expedita sequi sed incidunt voluptatem natus, doloremque adipisci.
            Similique, quas. Maxime quo adipisci quae accusantium nostrum ab, fuga quam possimus pariatur placeat? Nam excepturi blanditiis sed possimus, distinctio facere, illo magni dolores eveniet consequatur ipsam eum hic obcaecati?
            Eligendi eum accusantium tenetur iure corporis quod eveniet explicabo optio, ipsam molestiae fugit enim quidem sequi, fugiat laudantium totam sapiente quis iusto voluptates laboriosam blanditiis, tempora quisquam culpa. Ab, harum?
            Rem cum temporibus omnis soluta impedit voluptatem laborum officia quas ut quod. Et, laborum? Voluptatem nihil ex ea atque esse qui laborum. Ea eaque fugiat rerum aliquid, dolores repellat minus.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur hic quos nihil odit, ratione inventore temporibus quo architecto. Molestias dolorem labore officiis iusto debitis. Officiis quibusdam ut aliquam voluptas facere?
            Tempore quidem id fugit quod odit hic dolorem dolor incidunt sint optio debitis ducimus iure illo, modi cupiditate accusantium atque. Molestiae voluptatibus expedita sequi sed incidunt voluptatem natus, doloremque adipisci.
            Similique, quas. Maxime quo adipisci quae accusantium nostrum ab, fuga quam possimus pariatur placeat? Nam excepturi blanditiis sed possimus, distinctio facere, illo magni dolores eveniet consequatur ipsam eum hic obcaecati?
            Eligendi eum accusantium tenetur iure corporis quod eveniet explicabo optio, ipsam molestiae fugit enim quidem sequi, fugiat laudantium totam sapiente quis iusto voluptates laboriosam blanditiis, tempora quisquam culpa. Ab, harum?
            Rem cum temporibus omnis soluta impedit voluptatem laborum officia quas ut quod. Et, laborum? Voluptatem nihil ex ea atque esse qui laborum. Ea eaque fugiat rerum aliquid, dolores repellat minus.</p>
            <div>
                <div className="text-center m-auto mt-20">
                        <h1 className="mb-2 font-allura text-3xl font-bold">
                          Scan the QR code
                        </h1>
                        <p>You can also check the allergy advices using your phone as well</p>
                        <img src={QR} alt="" className="m-auto" />
                        <p className="text-orange-600 inline text-2xl">Scan</p>
                        <span>ME! </span>
                        <IoMdPhonePortrait className="m-auto inline" />
                      </div>
            </div>
        </div>
    </div>
  )
}

export default AdviceThree