import React from 'react'

export default function tvtCategoryList({ rendertvtCateGories, onAddNew }) {
    console.log("rendertvtCategories: ", rendertvtCateGories);
    let tvtCategoryElement = rendertvtCateGories.map((tvtCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{tvtCategory.tvtId}</td>
                <td>{tvtCategory.tvtCategoryName}</td>
                <td>{tvtCategory.tvtCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
            </tr>
        )
    })

    const tvtHandleAdd = ()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sach loai san pham</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ma loai</th>
                        <th>Ten loai</th>
                        <th>Trang thai</th>
                        <th>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {tvtCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={tvtHandleAdd}>Them moi</button>
        </div>
    )
}