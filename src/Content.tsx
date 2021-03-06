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
        transitionDuration: '0.1s',
        transition: {
            scale: { duration: '0.03s' },
        }
    },
    hidden: { opacity: 0, y: 20 },
}

export const Content: React.FC = () => {
    const dispatch = useAppDispatch();
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    const selected = useAppSelector(state => state.menuReducer.selected);
    const title = useAppSelector(state => state.menuReducer.selected ?
        state.menuReducer.options[state.menuReducer.selected].description : '');

    const color = useAppSelector(state => state.menuReducer.selected ?
        state.menuReducer.options[state.menuReducer.selected].itemColor : '');


    if(!selected) {
        return <div className="content"></div>
    }

    return <div key={title} className="content">
        <motion.h1 variants={childVariants} animate="show" initial="hidden">{title}</motion.h1>
        <motion.div animate="show" initial="hidden" variants={variants} className="content-grid">
            {arr.map(item => (
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.05, backgroundColor: '#dddddd' }}
                    variants={childVariants} style={{ borderColor: color }} className="card"
                    key={item} onClick={() => dispatch(increase())}>
                    <TagIcon />
                    {item}
                </motion.div>
            ))}
        </motion.div>
    </div>
}