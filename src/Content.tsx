import './Content.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { TagIcon } from './icons/TagIcon';
import { increase } from './menu/menuSlice';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
    show: {
        transition: {
            staggerChildren: 0.05,
        },
    },
    hidden: {},
}

const childVariants: Variants = {
    show: {
        opacity: 1,
        y: 0,
        transitionDuration: '0.1s'
    },
    hidden: { opacity: 0, y: 20 },
}

export const Content: React.FC = () => {
    const dispatch = useAppDispatch();
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const title = useAppSelector(state =>
        state.menuReducer.options[state.menuReducer.selected].description);

    const color = useAppSelector(state =>
        state.menuReducer.options[state.menuReducer.selected].itemColor);

    return <div key={title} className="content">
        <motion.h1 variants={childVariants} animate="show" initial="hidden">{title}</motion.h1>
        <motion.div animate="show" initial="hidden" variants={variants} className="content-grid">
            {arr.map(item => (
                <motion.div variants={childVariants} style={{ borderColor: color }} className="card" key={item} onClick={() => dispatch(increase())}>
                    <TagIcon />
                    {item}
                </motion.div>
            ))}
        </motion.div>
    </div>
}