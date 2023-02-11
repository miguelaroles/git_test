import React from 'react';
import { useEffect, useState } from "react";
import { Switch } from "@progress/kendo-react-inputs";
import { Grid, GridColumn,GridPageChangeEvent, } from "@progress/kendo-react-grid";
import { PageState,Data } from "../Interfaces/interfaces";
import './List.css';

const initialDataState: PageState = { skip: 0, take: 10 };

function List() {
    const [data,setData] = useState([]);
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const [selected, setSelected] = React.useState<boolean>(false);
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    useEffect(()=>{
        fetch(
            "https://api.punkapi.com/v2/beers",
            {
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        )
        .then(response => response.json())
        .then((data)=>{
            setData(data);
        });
    },[]);

    return (
        <main className="App">
            <section className="container">
                <div className="grid-wrapper">
                    <h2>Beers</h2>
                    <Grid
                        style={{
                            height: "auto",
                            margin: "1em 0",
                        }}
                        data={
                            selected ?
                                data.filter((item: Data)=> item.abv > 8):
                                data.slice(page.skip, page.take + page.skip)
                        }
                        skip={page.skip}
                        take={page.take}
                        total={selected ? data.filter((item: Data)=> item.abv > 8).length : data.length}
                        pageable={true}
                        onPageChange={pageChange}
                        >
                        <GridColumn field="id" title="ID" width="40px" />
                        <GridColumn field="name" title="Name" width="250px" />
                        <GridColumn field="tagline" title="Tagline" />
                        <GridColumn field="abv" title="ABV" />
                    </Grid>
                    <Switch onChange={() => setSelected(!selected)} checked={selected} />
                    <label className="label">{"Bières > 8% ABV"}</label>
                </div>
            </section>
        </main>
);
}

export default List;
