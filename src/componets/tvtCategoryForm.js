import React, { useState } from 'react';
import axios from '../api/tvtApi';

export default function tvtCategoryFrom({ onCloseForm, onCategorySubmit }) {
    const [tvtCategoryName, settvtCategoryName] = useState("");
    const [tvtCategoryStatus, settvtCategoryStatus] = useState(true);

    const tvtHandleClose = () => {
        onCloseForm(false);
    }

    const tvtHandleSubmit = async (event) => {
        event.preventDefault();
        let tvtCategory = {
            tvtId: 0,
            tvtCategoryName: tvtCategoryName,
            tvtCategoryStatus: tvtCategoryStatus
        };
        console.log("tvtCategory", tvtCategory);
        await axios.post("tvtCategory", tvtCategory);
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name='tvtCategoryName'
                        value={tvtCategoryName}
                        onChange={(ev) => settvtCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                    <select
                        name='tvtCategoryStatus'
                        value={tvtCategoryStatus}
                        onChange={(ev) => settvtCategoryStatus(ev.target.value === 'true')}
                        className='form-select'
                    >
                        <option value={true}>Hien thi</option>
                        <option value={false}>Tam khoa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={tvtHandleSubmit}>Thêm mới</button>
                <button className='btn btn-danger' onClick={tvtHandleClose}>Đóng</button>
            </form>
        </div>
    );
}