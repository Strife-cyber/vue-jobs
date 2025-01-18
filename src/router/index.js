import HomeView from '../vues/home.vue';
import JobView from '../vues/job_view.vue';
import JobsView from '../vues/jobs_view.vue';
import AddJobView from '../vues/add_job.vue';
import NotFoundView from '../vues/not_found.vue';
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/jobs/add',
            name: 'add job',
            component: AddJobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not found',
            component: NotFoundView
        }
    ]
});

export default router;
