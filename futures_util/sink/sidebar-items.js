initSidebarItems({"fn":[["close","A future that completes when the sink has finished closing."],["flush","A future that completes when the sink has finished processing all pending requests."]],"struct":[["Buffer","Sink for the `Sink::buffer` combinator, which buffers up to some fixed number of values when the underlying sink is unable to accept them."],["Close","Future for the `close` combinator, which polls the sink until all data has been closeed."],["Fanout","Sink that clones incoming items and forwards them to two sinks at the same time."],["Flush","Future for the `flush` combinator, which polls the sink until all data has been flushed."],["Send","Future for the `Sink::send` combinator, which sends a value to a sink and then waits until the sink has fully flushed."],["SendAll","Future for the `Sink::send_all` combinator, which sends a stream of values to a sink and then waits until the sink has fully flushed those values."],["SinkErrInto","A sink combinator to change the error type of a sink."],["SinkMapErr","Sink for the `Sink::sink_map_err` combinator."],["With","Sink for the `Sink::with` combinator, chaining a computation to run prior to pushing a value into the underlying sink."],["WithFlatMap","Sink for the `Sink::with_flat_map` combinator, chaining a computation that returns an iterator to run prior to pushing a value into the underlying sink"]],"trait":[["SinkExt","An extension trait for `Sink`s that provides a variety of convenient combinator functions."]]});