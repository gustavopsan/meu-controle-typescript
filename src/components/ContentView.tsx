import TodoContainer from './Todo/TodoContainer';
import ReportsContainer from './Reports/ReportsContainer';
import OverviewContainer from './Overview/OverviewContainer';

interface ContentViewProps {
    selectedView: string;
}

const ContentView = (props:ContentViewProps) => {

    switch (props.selectedView) {
        case 'todo': return <TodoContainer />;
        case 'reports': return <ReportsContainer />;
        case 'overview': return <OverviewContainer />;
        default: return <h1>Home</h1>;
    }
}

export default ContentView;