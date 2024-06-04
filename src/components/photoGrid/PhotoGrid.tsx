import React, { useState, useEffect, useMemo, MouseEventHandler } from 'react';
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';

import useMedia from './useMedia';
import data from './Pdata'; // 导入图片数据

import styles from './styles.module.css';

function Masonry() {
    // Hook1: 将媒体查询与列数挂钩
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [4, 3, 2], 2);
    // Hook2: 测量容器元素的宽度
    const [ref, { width }] = useMeasure();
    // Hook3: 保存项目
    const [items, setItems] = useState(data.map(item => ({ ...item, isExpanded: false })));

    // Hook5: 使用从 Hook1 和 Hook2 获取的宽度和列数形成堆叠项目的网格
    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0); // 每列从零开始的高度
        let gridItems = items.map((child, i) => {
            const column = heights.indexOf(Math.min(...heights)); // 基本砌体网格布局，使用 Math.min 将项目放入最小的列中
            const x = (width / columns) * column; // x = 容器宽度 / 列数 * 列索引
            const y = (heights[column] += child.height / 2) - child.height / 2; // y = 当前列的高度
            return { ...child, x, y, width: width / columns, height: child.height / 2 };
        });
        return [heights, gridItems];
    }, [columns, items, width]);

    const showPhoto: MouseEventHandler<HTMLDivElement> = (event) => {
        const value = event.currentTarget.getAttribute("id");
        const d = data;
        const photoIndex = d.findIndex(object => object.css === value);
        const targetHeight = d[photoIndex].height;

        setItems(prevItems =>
            prevItems.map(item =>
                item.css === value
                    ? { ...item, height: item.isExpanded ? targetHeight  : targetHeight * 4, isExpanded: !item.isExpanded }
                    : item
            )
        );
    };

    // Hook6: 将静态网格值转换为动画过渡，任何添加、删除或更改都将被动画化
    const transitions = useTransition(gridItems, {
        key: (item: { css: string; height: number }) => item.css,
        from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
        enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
        update: ({ x, y, width, height }) => ({ x, y, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25,
    });

    // 渲染网格
    return (
        <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
            {transitions((style, item) => (
                <a.div key={item.css} style={style}>
                    <div
                        id={item.css}
                        onClick={showPhoto}
                        style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }}
                    />
                </a.div>
            ))}
        </div>
    );
}

export default function App() {
    return <Masonry />;
}
