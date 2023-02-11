import React, {useEffect, useState} from "react";
import "./Graph.css";
const test_data = [{
    "id": 1,
    "name" : "member A",
    "linkId": 3,
},
    {
        "id": 2,
        "name": "member B",
        "linkId": 1,
    },
    {
        "id": 3,
        "name": "member C",
        "linkId": 2
    },
    {
        "id": 4,
        "name": "member D",
        "linkId": null
    },
    {
        "id": 5,
        "name": "member E",
        "linkId": null
    },
    {
        "id": 6,
        "name": "member F",
        "linkId": 1
    },
    {
        "id": 7,
        "name": "member G",
        "linkId": 9
    },
    {
        "id": 8,
        "name": "member H",
        "linkId": 9
    },
    {
        "id": 9,
        "name": "member I",
        "linkId": null
    },
    {
        "id": 10,
        "name": "member J",
        "linkId": 10
    },
    {
        "id": 11,
        "name": "member K",
        "linkId": null
    }];

const find_item_index = (items: any[], id: number) => {
    return items.findIndex((item) => item.id === id);
};

/*const detect_circular_ref = (data_items: any[], index: number) => {
    const stack = [];

    data_items.forEach((data_item: any)=>{

    });

    return false;
};*/

const main_function = (test_data: any[]) => {
    const charged: any[] = [];
    const targets: any[] = [];

    test_data.forEach((item: any,index: number)=>{
        if(item.linkId){
            targets.push(item);

            if(test_data[index].members && test_data[index].members.length > 0){
                test_data[index].members = [...new Set([test_data[index].members,test_data[index].members])];
            } else {
                test_data[index].members = [item.linkId];
            }

            test_data[index].charged = false;
        } else {
            charged.push(item);
            test_data[index].members = [];
            test_data[index].charged = true;
        }
    });

    targets.forEach((target: any) => {
        if(charged.map(item => item.id).includes(target.linkId)){
            const item_index = find_item_index(test_data,target.linkId);
            const new_index = find_item_index(test_data, target.id)
            test_data[item_index].charged = false;
            test_data[item_index].members.push(target.id);
            test_data[new_index].charged = true;
            charged.push(target);
        }
    });

    return test_data;
};

const Graph = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const raw_data: any = main_function(test_data);
        setData(raw_data);
    },[]);
    return(<section>
        <div className="container">
            <h2>Members</h2>
            <pre>{/*JSON.stringify(data,null, 2)*/}</pre>
            {data.map((data_item: any)=>{
                return(<div className="list-item">
                  <h4>{data_item.name}</h4>
                  <div className="charged">
                      Charged : <span className={`color ${data_item.charged ? 'green' : 'red'}`}>{data_item.charged ? 'True' : 'False'}</span>
                  </div>
                  <div className="children">
                      Children : <span>{data_item.members.length}</span>
                  </div>
                    <div className="id"><span>{data_item.id}</span></div>
                </div>);
            })}
        </div>
    </section>);
};

export default Graph;