import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data=[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div>
          <div>
              <LineChart  width={600} height={300} data={data}>
                <Line type="monotone" dataKey="revenue" stroke="#8884d8"></Line>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
              </LineChart>
          </div>
          <div>
          </div>
        </div>
    );
};

export default Dashboard;