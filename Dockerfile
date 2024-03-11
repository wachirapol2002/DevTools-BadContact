FROM node:20
WORKDIR /
# RUN npm install -g pnpm
COPY frontend /frontend
COPY backend /backend
RUN cd /frontend && npm install
RUN cd /backend && npm install
EXPOSE 8000
EXPOSE 3001
CMD ["sh", "-c", "cd /frontend && npm run dev & cd /backend && npm run dev"]