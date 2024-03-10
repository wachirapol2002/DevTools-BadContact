FROM node:20
WORKDIR /
RUN npm install -g pnpm
COPY frontend /frontend
COPY backend /backend
RUN cd /frontend && pnpm install
RUN cd /backend && pnpm install
EXPOSE 8000
EXPOSE 3001
CMD ["sh", "-c", "cd /frontend && pnpm run dev & cd /backend && pnpm run dev"]